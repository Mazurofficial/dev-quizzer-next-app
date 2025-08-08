import styles from './Question.module.scss';
import { Button, IconButton, Tooltip, Typography } from '@mui/material';
import type { AnswerKeyT, QuizQuestionT } from '@/shared/schemas/quiz';
import Answers from './Answers';
import { useQuizStore } from '../../store/store';
import { checkAnswer } from '@/utils/checkAnswer';
import HelpIcon from '@mui/icons-material/Help';

type QuestionProps = {
   id: QuizQuestionT['id'];
   onNextQuestion: () => void;
   onPrevQuestion: () => void;
   onFinish: () => void;
   isLast: boolean;
};

export default function Question({
   id,
   onNextQuestion,
   onPrevQuestion,
   onFinish,
   isLast,
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

   const handleAnswerChange = (answer: AnswerKeyT, label: string) => {
      setUserAnswer({
         questionId: id,
         answer: {
            answer,
            text: label,
            isCorrect: checkAnswer(question.correct_answers, answer),
         },
      });
   };

   return (
      <div className={styles.question}>
         <Typography component="h3">
            {question.question}{' '}
            <Tooltip title={question.description}>
               <HelpIcon />
            </Tooltip>
         </Typography>
         <Answers
            {...question.answers}
            selectedAnswer={userAnswer?.answer as AnswerKeyT}
            onAnswerChange={handleAnswerChange}
         />
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
