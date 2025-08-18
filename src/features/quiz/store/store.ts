import type {
   QuizQuestionT,
   RecordedAnswerT,
   UserAnswersT,
} from '@/shared/schemas/quiz';
import { create } from 'zustand';

type State = {
   quizById: Record<QuizQuestionT['id'], QuizQuestionT>;
   quizIds: QuizQuestionT['id'][];
   userAnswers: UserAnswersT;
   activeQuestion: { id: QuizQuestionT['id']; index: number };
};

type Answer = {
   questionId: QuizQuestionT['id'];
   answer: RecordedAnswerT;
};

type Action = {
   setQuiz: (quiz: QuizQuestionT[]) => void;
   setActiveQuestion: (questionId: State['activeQuestion']) => void;
   setUserAnswer: (answer: Answer) => void;
   setUserAnswers: (answers: UserAnswersT) => void;
   resetQuiz: () => void;
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
   setUserAnswer: ({ questionId, answer }) =>
      set((state) => ({
         userAnswers: { ...state.userAnswers, [questionId]: answer },
      })),
   setUserAnswers: (answers) => set({ userAnswers: answers }),
   // setCorrectAnswers: (correctAnswers, texts) => {
   //    const correctKeys = (Object.keys(correctAnswers) as CorrectAnswerKeyT[])
   //       .filter((key) => correctAnswers[key] === 'true')
   //       .map((key) => key.replace(/_correct$/, ''));

   //    const correctTexts = correctKeys
   //       .map((key) => texts[key as AnswerKeyT])
   //       .filter((text) => text != null);
   //    set({
   //       correctAnswers: {
   //          answers: correctKeys as AnswerKeyT[],
   //          texts: correctTexts,
   //       },
   //    });
   // },
   resetQuiz: () =>
      set({
         quizById: {},
         quizIds: [],
         userAnswers: {},
         activeQuestion: { id: 0, index: 0 },
      }),
}));
