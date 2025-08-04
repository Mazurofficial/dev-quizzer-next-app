import { Typography } from '@mui/material';
import type { QuizQuestionT } from '../../model/schema';
import Answers from './Answers';

export default function Question(props: QuizQuestionT) {
   return (
      <div>
         <Typography component="h3">{props.question}</Typography>
         <Typography component="h4">{props.description}</Typography>
         <Answers {...props.answers} />
      </div>
   );
}
