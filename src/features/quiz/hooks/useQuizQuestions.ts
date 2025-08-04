import { useQuery } from '@tanstack/react-query';
import { fetchQuizQuestions } from '../api/api';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { useEffect } from 'react';
import { useQuizStore } from '../store/store';

export function useQuizQuestions(params: QuestionsRequestParamsT) {
   const setQuiz = useQuizStore((state) => state.setQuiz);
   const { data, isLoading, error } = useQuery({
      queryKey: ['quiz-questions', params],
      queryFn: () => fetchQuizQuestions(params),
   });

   useEffect(() => {
      setQuiz(data ?? []);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [data]);

   return { data, isLoading, error };
}
