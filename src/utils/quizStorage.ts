import { useQuizStore } from '@/features/quiz/store/store';
import type { QuizQuestionT } from '@/shared/schemas/quiz';
import { useEffect } from 'react';

const QUIZ_STORAGE_KEY = 'current_quiz';

export function saveQuizToStorage(quiz: QuizQuestionT[]) {
   localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quiz));
}

export function getQuizFromStorage(): QuizQuestionT[] | null {
   const data = localStorage.getItem(QUIZ_STORAGE_KEY);
   return data ? JSON.parse(data) : null;
}

const USER_ANSWERS_KEY = 'user_answers';

export function usePersistUserAnswers() {
   const userAnswers = useQuizStore((state) => state.userAnswers);

   useEffect(() => {
      localStorage.setItem(USER_ANSWERS_KEY, JSON.stringify(userAnswers));
   }, [userAnswers]);
}

export function useHydrateUserAnswers() {
   const setUserAnswers = useQuizStore((state) => state.setUserAnswers);

   useEffect(() => {
      const data = localStorage.getItem(USER_ANSWERS_KEY);
      if (data) {
         setUserAnswers(JSON.parse(data));
      }
   }, [setUserAnswers]);
}

export function clearQuizStorage() {
   localStorage.removeItem(QUIZ_STORAGE_KEY);
   localStorage.removeItem(USER_ANSWERS_KEY);
}
