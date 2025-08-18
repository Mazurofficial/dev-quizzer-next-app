import { Typography } from '@mui/material';
import styles from './QuizAnswers.module.scss';

type AnswerDetailsProps = {
   letters: string[];
   answers: string[];
   explanation?: string | null;
   isCorrect: boolean;
   correctAnswer: {
      answers: string[];
      texts: string[];
   };
};

export default function AnswerDetails({
   letters,
   answers,
   explanation,
   isCorrect,
   correctAnswer,
}: AnswerDetailsProps) {
   return (
      <div>
         <Typography component="div" color={isCorrect ? 'success' : 'error'}>
            <b>Your answer(s): </b>
            <ul className={styles.answersList}>
               {letters?.map((a, i) => (
                  <li key={a + i}>
                     <i>
                        {a}
                        {answers[i]}
                     </i>
                  </li>
               ))}
            </ul>
         </Typography>
         {!isCorrect && (
            <Typography component="div" color="success">
               <b>Right answer(s): </b>
               <ul className={styles.answersList}>
                  {correctAnswer?.answers.map((a, i) => (
                     <li key={a + i}>
                        <i>
                           {a}
                           {correctAnswer.texts[i]}
                        </i>
                     </li>
                  ))}
               </ul>
            </Typography>
         )}
         <Typography component="p">
            <b>Explanation:</b> {explanation}
         </Typography>
      </div>
   );
}
