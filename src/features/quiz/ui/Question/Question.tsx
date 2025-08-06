import { Button, Typography } from '@mui/material';
import type { AnswerKeyT, QuizQuestionT } from '@/shared/schemas/quiz';
import Answers from './Answers';
import { useQuizStore } from '../../store/store';
import { useRouter } from 'next/navigation';
import { checkAnswer } from '@/utils/checkAnswer';
import { clearQuizStorage } from '@/utils/quizStorage';

type QuestionProps = {
   id: QuizQuestionT['id'];
   onNextQuestion: () => void;
   onPrevQuestion: () => void;
   isLast: boolean;
};

export default function Question({
   id,
   onNextQuestion,
   onPrevQuestion,
   isLast,
}: QuestionProps) {
   const question = useQuizStore((state) => state.quizById[id]);
   const userAnswer = useQuizStore((state) => state.userAnswers[id]);
   const setUserAnswer = useQuizStore((state) => state.setUserAnswer);
   const activeQuestionIndex = useQuizStore(
      (state) => state.activeQuestion.index
   );
   const router = useRouter();

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

   const finishQuiz = () => {
      //onNextQuestion();
      router.push('/results');
      clearQuizStorage();
   };

   return (
      <div>
         <Typography component="h3">{question.question}</Typography>
         <Typography component="h4">{question.description}</Typography>
         <Answers
            {...question.answers}
            selectedAnswer={userAnswer?.answer as AnswerKeyT}
            onAnswerChange={handleAnswerChange}
         />
         <div>
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
                  onClick={finishQuiz}
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
