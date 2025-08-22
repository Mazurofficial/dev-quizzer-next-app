import { getQuizFromStorage } from '@/utils/quizStorage';
import { useEffect, useState } from 'react';

export default function useHaveActiveQuiz() {
   const [haveActive, setHaveActive] = useState(false);

   useEffect(() => {
      const storedQuiz = getQuizFromStorage();
      if (storedQuiz) {
         setHaveActive(true);
      }
   }, []);

   return haveActive;
}
