import Results from '@/features/quiz/ui/Results/Results';
import styles from './page.module.scss';
import { Container, Typography } from '@mui/material';

export default function ResultsPage() {
   return (
      <Container className={styles.page} maxWidth="lg">
         <Typography variant="h2" component="h1">
            🏆 Results
         </Typography>
         <Results />
      </Container>
   );
}
