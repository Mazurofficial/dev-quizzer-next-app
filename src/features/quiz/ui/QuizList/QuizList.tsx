'use client';

import { useQuizQuestions } from '../../hooks/useQuizQuestions';
import Question from '../Question/Question';
import { useQuizStore } from '../../store/store';
import { useEffect } from 'react';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { useSearchParams } from 'next/navigation';
import type { DifficultyT } from '@/shared/schemas/quiz';
import { LinearProgress } from '@mui/material';
import {
   useHydrateUserAnswers,
   usePersistUserAnswers,
} from '@/utils/quizStorage';

export function QuizList() {
   useHydrateUserAnswers();
   usePersistUserAnswers();
   const searchParams = useSearchParams();
   const limitRaw = searchParams.get('limit');

   const params: QuestionsRequestParamsT = {
      limit: limitRaw ? Number(limitRaw) : undefined,
      category: searchParams.get('category') || undefined,
      difficulty: searchParams.get('difficulty') as DifficultyT,
   };

   const { isLoading, error } = useQuizQuestions(params);

   const quizIds = useQuizStore((state) => state.quizIds);
   const setActiveQuestion = useQuizStore((state) => state.setActiveQuestion);
   const activeQuestion = useQuizStore((state) => state.activeQuestion);
   const quizLength = useQuizStore((state) => state.quizIds.length);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const answersCount = Object.keys(userAnswers).length;
   const progress = (answersCount / quizLength) * 100;

   useEffect(() => {
      if (quizIds.length > 0) {
         setActiveQuestion({ id: quizIds[0], index: 0 });
      }
   }, [quizIds, setActiveQuestion]);

   const onNextQuestion = () => {
      const nextIndex = activeQuestion.index + 1;
      if (nextIndex < quizIds.length) {
         setActiveQuestion({
            id: quizIds[nextIndex],
            index: nextIndex,
         });
      }
   };

   const onPrevQuestion = () => {
      const prevIndex = activeQuestion.index - 1;
      if (prevIndex < quizIds.length - 1) {
         setActiveQuestion({
            id: quizIds[prevIndex],
            index: prevIndex,
         });
      }
   };

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;
   return (
      <div>
         <LinearProgress variant="determinate" value={progress} />
         <Question
            id={activeQuestion.id}
            onNextQuestion={onNextQuestion}
            onPrevQuestion={onPrevQuestion}
            isLast={quizLength - 1 === activeQuestion.index}
         />
      </div>
   );
}
