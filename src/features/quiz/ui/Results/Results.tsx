'use client';

import { useQuizStore } from '@/features/quiz/store/store';

export default function Results() {
   const userAnswers = useQuizStore((state) => state.userAnswers);

   return <p>{userAnswers.toString()}</p>;
}
