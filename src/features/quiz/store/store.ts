import type { QuizQuestionT } from '@/shared/schemas/quiz';
import { create } from 'zustand';

type State = {
   quizById: Record<QuizQuestionT['id'], QuizQuestionT>;
   quizIds: QuizQuestionT['id'][];
   userAnswers: Record<QuizQuestionT['id'], string>;
   activeQuestion: { id: QuizQuestionT['id']; index: number };
};

type Action = {
   setQuiz: (quiz: QuizQuestionT[]) => void;
   setActiveQuestion: (questionId: State['activeQuestion']) => void;
   setUserAnswer: (questionId: QuizQuestionT['id'], answer: string) => void;
};

export const useQuizStore = create<State & Action>((set) => ({
   quizById: {},
   quizIds: [],
   userAnswers: {},
   activeQuestion: { id: 0, index: 0 },
   setQuiz: (quizArr) => {
      const quizById = Object.fromEntries(quizArr.map((q) => [q.id, q]));
      const quizIds = quizArr.map((q) => q.id);
      set({ quizById, quizIds });
   },
   setActiveQuestion: (activeQuestion) =>
      set({ activeQuestion: { ...activeQuestion } }),
   setUserAnswer: (questionId, answer) =>
      set((state) => ({
         userAnswers: { ...state.userAnswers, [questionId]: answer },
      })),
}));
