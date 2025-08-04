import type { QuizQuestionT } from '@/shared/schemas/quiz';
import { create } from 'zustand';

type State = {
   quiz: QuizQuestionT[];
   activeQuestion: QuizQuestionT['id'];
};

type Action = {
   setQuiz: (quiz: State['quiz']) => void;
   setActiveQuestion: (questionId: State['activeQuestion']) => void;
};

export const useQuizStore = create<State & Action>((set) => ({
   quiz: [],
   activeQuestion: 0,
   setQuiz: (newQuiz) => set({ quiz: newQuiz }),
   setActiveQuestion: (activeQuestionId) =>
      set({ activeQuestion: activeQuestionId }),
}));
