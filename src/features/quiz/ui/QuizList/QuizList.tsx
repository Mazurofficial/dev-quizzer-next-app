'use client';

import { useQuizQuestions } from '../../hooks/useQuizQuestions';
import Question from '../Question/Question';
import { useQuizStore } from '../../store/store';
import { useEffect } from 'react';
//import { DATA_TEST } from '@/shared/data_test';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { useSearchParams } from 'next/navigation';
import type { DifficultyT } from '@/shared/schemas/quiz';

export function QuizList() {
   const searchParams = useSearchParams();
   const limitRaw = searchParams.get('limit');
   const limit = limitRaw ? Number(limitRaw) : undefined;

   const category = searchParams.get('category') || undefined;
   const difficulty = searchParams.get('difficulty') as DifficultyT;

   const params: QuestionsRequestParamsT = {
      limit,
      category,
      difficulty,
   };

   console.log(params);
   const { data, isLoading, error } = useQuizQuestions(params);

   const quiz = useQuizStore((state) => state.quiz);
   const setQuiz = useQuizStore((state) => state.setQuiz);

   useEffect(() => {
      setQuiz(data ?? []);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data]);

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

   return (
      <div>
         {quiz.map((q) => (
            <Question key={q.id} {...q} />
         ))}
      </div>
   );
}
