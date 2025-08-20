import ParamsForm from '@/features/params/ui/ParamsForm/ParamsForm';
import styles from './page.module.scss';
import { Container, Typography } from '@mui/material';

export default function ComposeQuiz() {
   return (
      <Container className={styles.page} maxWidth="lg">
         <Typography variant="h2" component="h1">
            ✏️ Create your personal quiz
         </Typography>
         <ParamsForm />
      </Container>
   );
}
