import { z } from 'zod';

export const AnswersSchema = z.object({
   answer_a: z.string().nullable(),
   answer_b: z.string().nullable(),
   answer_c: z.string().nullable(),
   answer_d: z.string().nullable(),
   answer_e: z.string().nullable(),
   answer_f: z.string().nullable(),
});

export type AnswerKeyT = keyof typeof AnswersSchema.shape;

export type AnswersT = z.infer<typeof AnswersSchema>;

const TrueFalse = z.union([z.literal('true'), z.literal('false')]);

export const CorrectAnswersSchema = z.object({
   answer_a_correct: TrueFalse,
   answer_b_correct: TrueFalse,
   answer_c_correct: TrueFalse,
   answer_d_correct: TrueFalse,
   answer_e_correct: TrueFalse,
   answer_f_correct: TrueFalse,
});

export type CorrectAnswersT = z.infer<typeof CorrectAnswersSchema>;
export type CorrectAnswerKeyT = keyof typeof CorrectAnswersSchema.shape;

export const TagSchema = z.object({
   name: z.string(),
});

export const DifficultySchema = z.union([
   z.literal('Easy'),
   z.literal('Medium'),
   z.literal('Hard'),
   z.literal(''),
]);

export type DifficultyT = z.infer<typeof DifficultySchema>;

export const QuizQuestionSchema = z.object({
   id: z.number(),
   question: z.string(),
   description: z.string().nullable().optional(),
   answers: AnswersSchema,
   multiple_correct_answers: TrueFalse,
   correct_answers: CorrectAnswersSchema,
   explanation: z.string().nullable().optional(),
   tip: z.string().nullable().optional(),
   tags: z.array(TagSchema),
   category: z.string(),
   difficulty: DifficultySchema,
});

export type QuizQuestionT = z.infer<typeof QuizQuestionSchema>;

export type QuestionsRequestParamsT = {
   limit?: number;
   difficulty?: DifficultyT;
   category?: string | '';
};

export type RecordedAnswerT = {
   question: string;
   explanation: QuizQuestionT['explanation'];
   answer: AnswerKeyT[];
   text: string[];
   isCorrect: boolean;
   correctAnswer: {
      answers: string[];
      texts: string[];
   };
};

export type UserAnswersT = Record<QuizQuestionT['id'], RecordedAnswerT>;
