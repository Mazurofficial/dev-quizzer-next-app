'use client';

import { useQuizStore } from '@/features/quiz/store/store';
import { buildResultArray } from '@/utils/buildResultArray';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Results() {
   const quizIds = useQuizStore((state) => state.quizIds);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const result = buildResultArray(quizIds, userAnswers);

   const router = useRouter();

   return (
      <div>
         {result.map((q, i) => (
            <Typography key={q.id}>
               <i>Question {i + 1}:</i> {q.answer.text} |{' '}
               {q.answer.answer
                  .charAt(q.answer.answer.length - 1)
                  .toUpperCase()}{' '}
               | <b>{q.answer.isCorrect ? 'TRUE' : 'FALSE'}</b>
            </Typography>
         ))}
         <Button
            variant="contained"
            color="primary"
            onClick={() => {
               router.push('/compose-quiz');
            }}
         >
            Start new quiz
         </Button>
      </div>
   );
}
