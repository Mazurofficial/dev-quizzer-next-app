import { CategoriesSchema, type CategoriesT } from '@/shared/schemas/quiz';
import { safeParseWithZod } from '@/utils/safeParserWithZod';
import axios from 'axios';

export async function fetchQuizCategories(): Promise<CategoriesT> {
   const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
   const url = 'https://quizapi.io/api/v1/categories';
   const res = await axios.get(url, {
      headers: {
         'X-Api-Key': apiKey,
      },
   });
   console.log(res.data);

   const data = safeParseWithZod<CategoriesT>(CategoriesSchema, res.data);
   return data;
}
