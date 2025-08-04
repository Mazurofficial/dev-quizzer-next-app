import ParamsForm from '@/features/params/ui/ParamsForm/ParamsForm';
import styles from './page.module.scss';

export default function ComposeQuiz() {
   return (
      <div className={styles.page}>
         <h1>Create your personal quiz</h1>
         <ParamsForm />
      </div>
   );
}
