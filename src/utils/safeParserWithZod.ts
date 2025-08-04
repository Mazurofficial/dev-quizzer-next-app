import type { ZodSchema } from 'zod';

export function safeParseWithZod<T>(schema: ZodSchema<T>, data: unknown): T {
   const result = schema.safeParse(data);
   if (!result.success) {
      throw new Error('Invalid data: ' + JSON.stringify(result.error.issues));
   }
   return result.data as T;
}
