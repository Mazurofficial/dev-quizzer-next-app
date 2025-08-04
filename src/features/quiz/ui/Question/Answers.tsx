import type { AnswersT } from '@/shared/schemas/quiz';
import {
   Radio,
   FormControl,
   FormControlLabel,
   RadioGroup,
} from '@mui/material';

export default function Answers(props: AnswersT) {
   return (
      <FormControl>
         <RadioGroup aria-labelledby="answers-group" name="radio-buttons-group">
            {Object.entries(props).map(([key, value]) =>
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
