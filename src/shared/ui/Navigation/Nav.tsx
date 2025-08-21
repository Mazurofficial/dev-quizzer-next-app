'use client';

import styles from './Nav.module.scss';
import { useQuizStore } from '@/features/quiz/store/store';
import { Link } from '@mui/material';

export default function Nav() {
   const quizIds = useQuizStore((state) => state.quizIds);
   const haveActiveQuiz = quizIds.length > 0;

   return (
      <nav className={styles.navigation}>
         <Link href="/" underline="none">
            Main
         </Link>
         <Link href="/compose-quiz" underline="none">
            Compose quiz
         </Link>
         {haveActiveQuiz && (
            <Link href="quiz" underline="none">
               Return to active quiz
            </Link>
         )}
      </nav>
   );
}
