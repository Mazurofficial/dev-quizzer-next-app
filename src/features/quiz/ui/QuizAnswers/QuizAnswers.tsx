import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { RecordedAnswerT } from '@/shared/schemas/quiz';
import AnswerTitle from './AnswerTitle';
import AnswerDetails from './AnswerDetails';

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
                  id={`${q.id}-header`}
               >
                  <AnswerTitle
                     index={i + 1}
                     title={q.answer.question}
                     isCorrect={q.answer.isCorrect}
                  />
               </AccordionSummary>
               <AccordionDetails>
                  <AnswerDetails
                     letters={q.answer.answer.map(
                        (a) => a.charAt(a.length - 1).toUpperCase() + ') '
                     )}
                     answers={q.answer.text}
                     explanation={q.answer.explanation}
                     isCorrect={q.answer.isCorrect}
                     correctAnswer={q.answer.correctAnswer}
                  />
               </AccordionDetails>
            </Accordion>
         ))}
      </div>
   );
}
