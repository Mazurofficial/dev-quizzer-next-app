import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { RecordedAnswerT } from '@/shared/schemas/quiz';

type QuizAnswerProps = {
   answers: {
      id: number;
      answer: RecordedAnswerT;
   }[];
};

export default function QuizAnswers({ answers }: QuizAnswerProps) {
   return (
      <div>
         {answers.map((q, i) => (
            <Accordion key={q.id}>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
               >
                  <Typography component="span">{q.answer.question}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  {q.answer.text} |{' '}
                  {/* {q.answer.answer
                     .charAt(q.answer.answer.length - 1)
                     .toUpperCase()}{' '} */}
                  | <b>{q.answer.isCorrect ? 'TRUE' : 'FALSE'}</b>
               </AccordionDetails>
            </Accordion>
         ))}
      </div>
   );
}
