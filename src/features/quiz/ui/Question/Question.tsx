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
   const activeQuestionIndex = useQuizStore(
      (state) => state.activeQuestion.index
   );

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
                  variant="contained"
                  color="primary"
                  onClick={onPrevQuestion}
               >
                  Previous
               </Button>
            )}
            {isLast ? (
               <Button
                  variant="contained"
                  color="primary"
                  onClick={onFinish}
                  disabled={!userAnswer?.answer}
               >
                  Finish Quiz
               </Button>
            ) : (
               <Button
                  variant="contained"
                  color="primary"
                  onClick={onNextQuestion}
                  disabled={!userAnswer?.answer}
               >
                  Next
               </Button>
            )}
         </div>
      </div>
   );
}
