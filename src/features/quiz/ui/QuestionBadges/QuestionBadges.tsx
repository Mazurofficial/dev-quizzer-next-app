import styles from './QuestionBadges.module.scss';
import { Chip } from '@mui/material';
import { useQuizStore } from '../../store/store';

export default function QuestionBadges() {
   const quiz = useQuizStore((state) => state.quizIds);
   const setActiveQuestion = useQuizStore((state) => state.setActiveQuestion);
   const activeQuestion = useQuizStore((state) => state.activeQuestion);
   const userAnswers = useQuizStore((state) => state.userAnswers);

   return (
      <div className={styles.badges}>
         {quiz.map((q, i) => {
            const isActive = q === activeQuestion.id;
            const isAnswered = userAnswers[`${q}`] !== undefined;
            return (
               <Chip
                  key={q}
                  variant={isAnswered ? 'filled' : 'outlined'}
                  color={isActive ? 'primary' : 'default'}
                  label={'Question ' + (i + 1).toString()}
                  onClick={() => setActiveQuestion({ id: q, index: i })}
               />
            );
         })}
      </div>
   );
}
