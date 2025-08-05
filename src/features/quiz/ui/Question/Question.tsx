import { Button, Typography } from '@mui/material';
import type {
   AnswerKeyT,
   AnswersT,
   QuizQuestionT,
   RecordedAnswerT,
} from '@/shared/schemas/quiz';
import Answers from './Answers';
import { useQuizStore } from '../../store/store';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkAnswer } from '@/utils/checkAnswer';

type QuestionProps = {
   id: QuizQuestionT['id'];
   onNextQuestion: () => void;
   isLast: boolean;
};

export default function Question({
   id,
   onNextQuestion,
   isLast,
}: QuestionProps) {
   const question = useQuizStore((state) => state.quizById[id]);
   const userAnswer = useQuizStore((state) => state.userAnswers[id]);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const setUserAnswer = useQuizStore((state) => state.setUserAnswer);

   const [selectedAnswer, setSelectedAnswer] = useState<RecordedAnswerT>(
      userAnswer || {}
   );

   const onAnswer = () => {
      if (selectedAnswer) {
         setUserAnswer(id, selectedAnswer);
         onNextQuestion();
         if (isLast) {
            router.push('/results');
            console.log(userAnswers);
         }
      }
   };

   const handleAnswerChange = (answer: AnswerKeyT, label: string) => {
      console.log({
         answer: answer,
         text: label,
         isCorrect: checkAnswer(question.correct_answers, answer),
      });
      setSelectedAnswer({
         answer: answer,
         text: label,
         isCorrect: checkAnswer(question.correct_answers, answer),
      });
   };

   const router = useRouter();

   if (!question) {
      return <div>Loading question...</div>;
   }

   return (
      <div>
         <Typography component="h3">{question.question}</Typography>
         <Typography component="h4">{question.description}</Typography>
         <Answers
            {...question.answers}
            selectedAnswer={selectedAnswer.answer}
            onAnswerChange={handleAnswerChange}
         />
         <div>
            <Button
               variant="contained"
               color="primary"
               onClick={onAnswer}
               disabled={!selectedAnswer}
            >
               Next
            </Button>
         </div>
      </div>
   );
}
