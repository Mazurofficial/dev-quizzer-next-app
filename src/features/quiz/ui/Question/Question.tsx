import { Button, Typography } from '@mui/material';
import type { QuizQuestionT } from '@/shared/schemas/quiz';
import Answers from './Answers';
import { useQuizStore } from '../../store/store';
import { useState } from 'react';

type QuestionProps = {
   id: QuizQuestionT['id'];
   onNextQuestion: () => void;
};

export default function Question({ id, onNextQuestion }: QuestionProps) {
   const question = useQuizStore((state) => state.quizById[id]);
   const userAnswer = useQuizStore((state) => state.userAnswers[id]);
   const setUserAnswer = useQuizStore((state) => state.setUserAnswer);

   const [selectedAnswer, setSelectedAnswer] = useState<string>(
      userAnswer || ''
   );

   const onAnswer = () => {
      if (selectedAnswer) {
         setUserAnswer(id, selectedAnswer);
         onNextQuestion();
      }
   };

   const handleAnswerChange = (answer: string) => {
      setSelectedAnswer(answer);
   };

   if (!question) {
      return <div>Loading question...</div>;
   }

   return (
      <div>
         <Typography component="h3">{question.question}</Typography>
         <Typography component="h4">{question.description}</Typography>
         <Answers
            {...question.answers}
            selectedAnswer={selectedAnswer}
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
