'use client';

import useHaveActiveQuiz from '@/features/quiz/hooks/useHaveActiveQuiz';
import styles from './Nav.module.scss';
import { Link } from '@mui/material';

export default function Nav() {
   const haveActiveQuiz = useHaveActiveQuiz();
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
