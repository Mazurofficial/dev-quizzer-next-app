import z from 'zod';
import { DifficultySchema } from './quiz';

export const CategorySchema = z.union([z.string(), z.literal('')]);

export const RequestParamsSchema = z.object({
   limit: z.number().optional(),
   difficulty: DifficultySchema.optional(),
   category: CategorySchema.optional(),
});

export type QuestionsRequestParamsT = z.infer<typeof RequestParamsSchema>;
