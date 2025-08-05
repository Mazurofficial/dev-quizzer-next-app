import Results from '@/features/results/ui/Results/Results';
import styles from './page.module.scss';

export default function ResultsPage() {
   return (
      <div className={styles.page}>
         <h1>Results</h1>
         <Results />
      </div>
   );
}
