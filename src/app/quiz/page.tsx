import styles from './page.module.scss';
import { QuizList } from '@/features/quiz/ui/QuizList/QuizList';

export default function Quiz() {
   return (
      <div className={styles.page}>
         <h1>DEV QUIZZER</h1>
         <QuizList />
      </div>
   );
}
