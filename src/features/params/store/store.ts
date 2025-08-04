import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { create } from 'zustand';

type State = {
   params: QuestionsRequestParamsT;
};

type Action = {
   setParams: (params: State['params']) => void;
};

export const useParamsStore = create<State & Action>((set) => ({
   params: {},
   setParams: (newParams) => set({ params: newParams }),
}));
