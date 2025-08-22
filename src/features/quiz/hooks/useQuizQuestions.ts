import { useQuery } from '@tanstack/react-query';
import { fetchQuizQuestions } from '../api/api';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { useEffect, useState } from 'react';
import { useQuizStore } from '../store/store';
import { getQuizFromStorage, saveQuizToStorage } from '@/utils/quizStorage';

export function useQuizQuestions(params: QuestionsRequestParamsT) {
   const setQuiz = useQuizStore((state) => state.setQuiz);

   const [initialized, setInitialized] = useState(false);

   useEffect(() => {
      const storedQuiz = getQuizFromStorage();
      if (storedQuiz) {
         setQuiz(storedQuiz);
         setInitialized(false);
      } else {
         setInitialized(true);
      }
   }, [setQuiz]);

   const { data, isLoading, error } = useQuery({
      queryKey: ['quiz-questions', params],
      queryFn: () => fetchQuizQuestions(params),
      enabled: initialized,
      staleTime: Infinity,
   });

   useEffect(() => {
      if (data && initialized) {
         setQuiz(data);
         saveQuizToStorage(data);
         setInitialized(true);
      }
   }, [data, initialized, setQuiz]);

   return {
      data: initialized ? getQuizFromStorage() : data,
      isLoading: !initialized && isLoading,
      error,
   };
}
