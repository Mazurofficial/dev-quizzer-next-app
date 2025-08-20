import { Suspense } from 'react';
import styles from './page.module.scss';
import { QuizList } from '@/features/quiz/ui/QuizList/QuizList';
import { CircularProgress, Container, Typography } from '@mui/material';

export default function Quiz() {
   return (
      <Container className={styles.page} maxWidth="lg">
         <Typography variant="h2" component="h1">
            💻 Code, Think, Answer!
         </Typography>
         <Suspense fallback={<CircularProgress />}>
            <QuizList />
         </Suspense>
      </Container>
   );
}
