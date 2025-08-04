import type {
   AnswerKeyT,
   CorrectAnswerKeyT,
   CorrectAnswersT,
} from '@/shared/schemas/quiz';

export const checkAnswer = (correct: CorrectAnswersT, answer: AnswerKeyT) => {
   const formattedAnswer = (answer + '_correct') as CorrectAnswerKeyT;
   if (correct[formattedAnswer] === 'true') {
      return true;
   }
   return false;
};
