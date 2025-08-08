import type { QuizQuestionT, UserAnswersT } from '@/shared/schemas/quiz';

export const buildResultArray = (
   quizIds: QuizQuestionT['id'][],
   resultObj: UserAnswersT
) => {
   const resultArray = quizIds.map((id) => ({
      id: id,
      answer: resultObj[id],
   }));

   const culcScore = () => {
      let score = 0;
      resultArray.map((q) => {
         if (q.answer.isCorrect) score++;
      });
      return (score / resultArray.length) * 100;
   };

   return { score: culcScore(), resultArray };
};
