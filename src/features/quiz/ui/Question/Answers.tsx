import type { AnswersT } from '@/shared/schemas/quiz';
import {
   Radio,
   FormControl,
   FormControlLabel,
   RadioGroup,
} from '@mui/material';

type AnswersProps = AnswersT & {
   selectedAnswer?: string;
   onAnswerChange: (answer: string) => void;
};

export default function Answers({
   selectedAnswer,
   onAnswerChange,
   ...answers
}: AnswersProps) {
   return (
      <FormControl>
         <RadioGroup
            aria-labelledby="answers-group"
            name="radio-buttons-group"
            value={selectedAnswer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
         >
            {Object.entries(answers).map(([key, value]) =>
               value ? (
                  <FormControlLabel
                     key={key}
                     value={key}
                     control={<Radio />}
                     label={value}
                  />
               ) : null
            )}
         </RadioGroup>
      </FormControl>
   );
}
