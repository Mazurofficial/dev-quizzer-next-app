import type { QuizQuestionT, UserAnswersT } from '@/shared/schemas/quiz';

export const buildResultArray = (
   quizIds: QuizQuestionT['id'][],
   resultArr: UserAnswersT
) => {
   const resultArray = quizIds.map((id) => ({
      id: id,
      answer: resultArr[id],
   }));
   return resultArray;
};
