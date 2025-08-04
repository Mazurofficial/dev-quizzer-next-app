import { useQuery } from '@tanstack/react-query';
import { fetchQuizQuestions } from '../api/api';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';

export function useQuizQuestions(params: QuestionsRequestParamsT) {
   return useQuery({
      queryKey: ['quiz-questions', params],
      queryFn: () => fetchQuizQuestions(params),
   });
}
