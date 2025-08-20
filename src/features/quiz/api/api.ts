import axios from 'axios';

import { safeParseWithZod } from '@/utils/safeParserWithZod';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { QuizQuestionSchema, type QuizQuestionT } from '@/shared/schemas/quiz';

export async function fetchQuizQuestions(
   params: QuestionsRequestParamsT
): Promise<QuizQuestionT[]> {
   const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
   const url = 'https://quizapi.io/api/v1/questions';
   console.log(apiKey);
   const res = await axios.get(url, {
      params,
      headers: {
         'X-Api-Key': apiKey,
      },
   });
   console.log(res);

   const data = safeParseWithZod<QuizQuestionT[]>(
      QuizQuestionSchema.array(),
      res.data
   );
   return data;
}
