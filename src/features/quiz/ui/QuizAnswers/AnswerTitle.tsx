import { Chip, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import BlockIcon from '@mui/icons-material/Block';

type AnswerTitleProps = {
   index: number;
   title: string;
   isCorrect: boolean;
};

export default function AnswerTitle({
   index,
   title,
   isCorrect,
}: AnswerTitleProps) {
   return (
      <Typography component="span">
         {index + '. '}
         {title}{' '}
         {isCorrect ? (
            <Chip
               label="RIGHT"
               color="success"
               variant="filled"
               icon={<DoneIcon />}
            />
         ) : (
            <Chip
               label="ERROR"
               color="error"
               variant="filled"
               icon={<BlockIcon />}
            />
         )}
      </Typography>
   );
}
