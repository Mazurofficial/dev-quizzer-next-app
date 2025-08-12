import type { AnswerKeyT, AnswersT } from '@/shared/schemas/quiz';
import {
   FormControl,
   FormControlLabel,
   FormGroup,
   Checkbox,
} from '@mui/material';

type AnswersProps = AnswersT & {
   selectedAnswers?: AnswerKeyT[];
   onAnswerChange: (answer: AnswerKeyT, label: string) => void;
};

export default function AnswersMultiple({
   selectedAnswers,
   onAnswerChange,
   ...answers
}: AnswersProps) {
   const isChecked = (key: AnswerKeyT) =>
      selectedAnswers?.includes(key as AnswerKeyT);

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onAnswerChange(
         e.target.value as AnswerKeyT,
         answers[e.target.value as AnswerKeyT] ?? ''
      );
   };

   return (
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
         <FormGroup>
            {Object.entries(answers).map(([key, value]) =>
               value ? (
                  <FormControlLabel
                     key={key}
                     control={
                        <Checkbox
                           checked={isChecked(key as AnswerKeyT)}
                           onChange={onChange}
                           name={key}
                           value={key}
                        />
                     }
                     label={value}
                  />
               ) : null
            )}
         </FormGroup>
      </FormControl>
   );
}
