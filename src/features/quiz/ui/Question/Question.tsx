import styles from './Question.module.scss';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import type { AnswerKeyT, QuizQuestionT } from '@/shared/schemas/quiz';
import Answers from './Answers';
import { useQuizStore } from '../../store/store';
import { checkAnswer } from '@/utils/checkAnswer';
import HelpIcon from '@mui/icons-material/Help';
import AnswersMultiple from './AnswersMultiple';

type QuestionProps = {
   id: QuizQuestionT['id'];
   onNextQuestion: () => void;
   onPrevQuestion: () => void;
   onFinish: () => void;
};

export default function Question({
   id,
   onNextQuestion,
   onPrevQuestion,
   onFinish,
}: QuestionProps) {
   const question = useQuizStore((state) => state.quizById[id]);
   const userAnswer = useQuizStore((state) => state.userAnswers[id]);
   const setUserAnswer = useQuizStore((state) => state.setUserAnswer);
   const quizLength = useQuizStore((state) => state.quizIds.length);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const userAnswersLength = Object.keys(userAnswers).length;
   const activeQuestionIndex = useQuizStore(
      (state) => state.activeQuestion.index
   );
   const isReadyToFinish = quizLength === userAnswersLength;

   if (!question) return <div>Loading question...</div>;

   const handleSingleAnswerChange = (answer: AnswerKeyT, label: string) => {
      const newAnswer = [answer] as AnswerKeyT[];
      setUserAnswer({
         questionId: id,
         answer: {
            question: question.question,
            explanation: question.explanation,
            answer: newAnswer,
            text: label,
            isCorrect: checkAnswer(question.correct_answers, newAnswer),
         },
      });
   };

   const handleMultipleAnswerChange = (answer: AnswerKeyT, label: string) => {
      const currentAnswers = (userAnswer?.answer as AnswerKeyT[]) || [];
      let newAnswer: AnswerKeyT[];

      if (currentAnswers.includes(answer)) {
         newAnswer = currentAnswers.filter((a) => a !== answer);
      } else {
         newAnswer = [...currentAnswers, answer];
      }
      setUserAnswer({
         questionId: id,
         answer: {
            question: question.question,
            explanation: question.explanation,
            answer: newAnswer,
            text: label,
            isCorrect: checkAnswer(question.correct_answers, newAnswer),
         },
      });
   };

   return (
      <div className={styles.question}>
         <Typography component="h3">
            {question.question}{' '}
            <Tooltip title={question.explanation}>
               <HelpIcon />
            </Tooltip>
         </Typography>
         {question.multiple_correct_answers === 'true' ? (
            <AnswersMultiple
               {...question.answers}
               selectedAnswers={userAnswer?.answer as AnswerKeyT[]}
               onAnswerChange={handleMultipleAnswerChange}
            />
         ) : (
            <Answers
               {...question.answers}
               selectedAnswer={userAnswer?.answer[0] as AnswerKeyT}
               onAnswerChange={handleSingleAnswerChange}
            />
         )}
         <div className={styles.questionBtns}>
            {activeQuestionIndex > 0 && (
               <Button
                  variant="outlined"
                  color="primary"
                  onClick={onPrevQuestion}
               >
                  Previous
               </Button>
            )}
            {activeQuestionIndex < quizLength - 1 && (
               <Button
                  variant="outlined"
                  color="primary"
                  onClick={onNextQuestion}
                  disabled={!userAnswer?.answer}
               >
                  Next
               </Button>
            )}
            {isReadyToFinish && (
               <Button
                  variant="contained"
                  color="primary"
                  onClick={onFinish}
                  disabled={!userAnswer?.answer}
               >
                  Finish Quiz
               </Button>
            )}
         </div>
      </div>
   );
}
