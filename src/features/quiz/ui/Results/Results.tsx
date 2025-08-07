'use client';

import { useQuizStore } from '@/features/quiz/store/store';
import { buildResultArray } from '@/utils/buildResultArray';
import { clearQuizStorage } from '@/utils/quizStorage';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Results() {
   const quizIds = useQuizStore((state) => state.quizIds);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const { score, resultArray } = buildResultArray(quizIds, userAnswers);
   const resetQuiz = useQuizStore((state) => state.resetQuiz);
   const router = useRouter();

   const onStartNewQuiz = () => {
      clearQuizStorage();
      resetQuiz();
      router.push('/compose-quiz');
   };

   return (
      <div>
         <Typography variant="h3">{score}/100</Typography>
         {resultArray.map((q, i) => (
            <Typography key={q.id}>
               <i>Question {i + 1}:</i> {q.answer.text} |{' '}
               {q.answer.answer
                  .charAt(q.answer.answer.length - 1)
                  .toUpperCase()}{' '}
               | <b>{q.answer.isCorrect ? 'TRUE' : 'FALSE'}</b>
            </Typography>
         ))}
         <Button variant="contained" color="primary" onClick={onStartNewQuiz}>
            Start new quiz
         </Button>
      </div>
   );
}
