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
               label="Right"
               color="success"
               variant="outlined"
               size="small"
               icon={<DoneIcon />}
            />
         ) : (
            <Chip
               label="Error"
               color="error"
               variant="outlined"
               size="small"
               icon={<BlockIcon />}
            />
         )}
      </Typography>
   );
}
