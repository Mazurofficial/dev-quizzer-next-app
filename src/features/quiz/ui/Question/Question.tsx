import styles from './Question.module.scss';
import { Button, CircularProgress, Tooltip, Typography } from '@mui/material';
import type {
   AnswerKeyT,
   AnswersT,
   CorrectAnswersT,
   QuizQuestionT,
} from '@/shared/schemas/quiz';
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

   if (!question)
      return (
         <div className={styles.question}>
            <CircularProgress />
         </div>
      );

   const writeCorrectAnswers = (
      correctAnswers: CorrectAnswersT,
      texts: AnswersT
   ) => {
      const correctKeys = (
         Object.keys(correctAnswers) as (keyof typeof correctAnswers)[]
      )
         .filter((key) => correctAnswers[key] === 'true')
         .map((key) => key.replace(/_correct$/, '') as keyof typeof texts);
      //.charAt(0).toUpperCase()

      const correctTexts = correctKeys
         .map((key) => texts[key])
         .filter((text): text is string => text != null);

      const correctLetters = correctKeys.map(
         (key) => key.charAt(key.length - 1).toUpperCase() + ') '
      );

      return {
         answers: correctLetters,
         texts: correctTexts,
      };
   };

   const correctAnswers = writeCorrectAnswers(
      question.correct_answers,
      question.answers
   );

   const handleSingleAnswerChange = (answer: AnswerKeyT, label: string) => {
      const newAnswer = [answer] as AnswerKeyT[];
      setUserAnswer({
         questionId: id,
         answer: {
            question: question.question,
            explanation: question.explanation,
            answer: newAnswer,
            text: [label],
            isCorrect: checkAnswer(question.correct_answers, newAnswer),
            correctAnswer: correctAnswers,
         },
      });
   };

   const handleMultipleAnswerChange = (answer: AnswerKeyT) => {
      const currentAnswers = (userAnswer?.answer as AnswerKeyT[]) || [];
      let newAnswer: AnswerKeyT[];

      if (currentAnswers.includes(answer)) {
         newAnswer = currentAnswers.filter((a) => a !== answer);
      } else {
         newAnswer = [...currentAnswers, answer];
      }

      const answerLabels: string[] = newAnswer.map((a) => {
         return question.answers[a] ?? a;
      });

      setUserAnswer({
         questionId: id,
         answer: {
            question: question.question,
            explanation: question.explanation,
            answer: newAnswer,
            text: answerLabels,
            isCorrect: checkAnswer(question.correct_answers, newAnswer),
            correctAnswer: correctAnswers,
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
