import type {
   AnswerKeyT,
   CorrectAnswerKeyT,
   CorrectAnswersT,
} from '@/shared/schemas/quiz';

export const checkAnswer = (
   correct: CorrectAnswersT,
   answers: AnswerKeyT[]
) => {
   if (!Array.isArray(answers) || answers.length === 0) return false;
   const correctKeys = (Object.keys(correct) as CorrectAnswerKeyT[]).filter(
      (key) => correct[key] === 'true'
   );
   const selectedKeys = answers.map(
      (a) => (a + '_correct') as CorrectAnswerKeyT
   );
   const allSelectedAreCorrect = selectedKeys.every(
      (key) => correct[key] === 'true'
   );
   const allCorrectAreSelected = correctKeys.every((key) =>
      selectedKeys.includes(key)
   );

   return allSelectedAreCorrect && allCorrectAreSelected;
};
