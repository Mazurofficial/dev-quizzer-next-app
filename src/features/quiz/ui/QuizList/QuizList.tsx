'use client';

import styles from './QuizList.module.scss';
import { useQuizQuestions } from '../../hooks/useQuizQuestions';
import Question from '../Question/Question';
import { useQuizStore } from '../../store/store';
import { useEffect } from 'react';
import type { QuestionsRequestParamsT } from '@/shared/schemas/params';
import { useRouter, useSearchParams } from 'next/navigation';
import type { DifficultyT } from '@/shared/schemas/quiz';
import { CircularProgress, LinearProgress } from '@mui/material';
import {
   clearQuizStorage,
   useHydrateUserAnswers,
   usePersistUserAnswers,
} from '@/utils/quizStorage';
import QuestionBadges from '../QuestionBadges/QuestionBadges';

export function QuizList() {
   useHydrateUserAnswers();
   usePersistUserAnswers();
   const searchParams = useSearchParams();
   const limitRaw = searchParams.get('limit');

   const params: QuestionsRequestParamsT = {
      limit: limitRaw ? Number(limitRaw) : undefined,
      category: searchParams.get('category') || undefined,
      difficulty: searchParams.get('difficulty') as DifficultyT,
   };

   const { isLoading, error } = useQuizQuestions(params);
   const router = useRouter();

   const quizIds = useQuizStore((state) => state.quizIds);
   const setActiveQuestion = useQuizStore((state) => state.setActiveQuestion);
   const activeQuestion = useQuizStore((state) => state.activeQuestion);
   const quizLength = useQuizStore((state) => state.quizIds.length);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const answersCount = Object.keys(userAnswers).length;
   const progress = (answersCount / quizLength) * 100;

   useEffect(() => {
      if (quizIds.length > 0) {
         setActiveQuestion({ id: quizIds[0], index: 0 });
      }
   }, [quizIds, setActiveQuestion]);

   const onNextQuestion = () => {
      const nextIndex = activeQuestion.index + 1;
      if (nextIndex < quizIds.length) {
         setActiveQuestion({
            id: quizIds[nextIndex],
            index: nextIndex,
         });
      }
   };

   const onPrevQuestion = () => {
      const prevIndex = activeQuestion.index - 1;
      if (prevIndex < quizIds.length - 1) {
         setActiveQuestion({
            id: quizIds[prevIndex],
            index: prevIndex,
         });
      }
   };

   const onFinishQuiz = () => {
      router.push('/results');
   };

   if (isLoading) return <CircularProgress />;
   if (error) return <div>Error: {error.message}</div>;
   return (
      <div className={styles.quiz}>
         <LinearProgress variant="determinate" value={progress} />
         <QuestionBadges />
         <Question
            id={activeQuestion.id}
            onNextQuestion={onNextQuestion}
            onPrevQuestion={onPrevQuestion}
            onFinish={onFinishQuiz}
         />
      </div>
   );
}
