import { Suspense } from 'react';
import styles from './page.module.scss';
import { QuizList } from '@/features/quiz/ui/QuizList/QuizList';
import { CircularProgress } from '@mui/material';

export default function Quiz() {
   return (
      <div className={styles.page}>
         <h1>DEV QUIZZER</h1>
         <Suspense fallback={<CircularProgress />}>
            <QuizList />
         </Suspense>
      </div>
   );
}
