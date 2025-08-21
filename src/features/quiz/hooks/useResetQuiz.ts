import { clearQuizStorage } from '@/utils/quizStorage';
import { useQuizStore } from '../store/store';

export const useResetQuiz = () => {
   const resetQuiz = useQuizStore((state) => state.resetQuiz);
   return () => {
      clearQuizStorage();
      resetQuiz();
   };
};

export default useResetQuiz;
