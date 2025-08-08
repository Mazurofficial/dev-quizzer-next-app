'use client';

import html2canvas from 'html2canvas';
import styles from './Results.module.scss';
import { useQuizStore } from '@/features/quiz/store/store';
import { buildResultArray } from '@/utils/buildResultArray';
import { clearQuizStorage } from '@/utils/quizStorage';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useParamsStore } from '@/features/params/store/store';

export default function Results() {
   const quizIds = useQuizStore((state) => state.quizIds);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const { score, resultArray } = buildResultArray(quizIds, userAnswers);
   const resetQuiz = useQuizStore((state) => state.resetQuiz);
   const router = useRouter();
   const params = useParamsStore((state) => state.params);

   const onStartNewQuiz = () => {
      clearQuizStorage();
      resetQuiz();
      router.push('/compose-quiz');
   };

   const resultRef = useRef(null);

   const handleDownloadImage = async () => {
      if (resultRef.current) {
         const canvas = await html2canvas(resultRef.current, {
            backgroundColor: '#fff', // ensures white background
            useCORS: true, // if you have images from other domains
         });
         const link = document.createElement('a');
         link.download = 'quiz-results.png';
         link.href = canvas.toDataURL('image/png');
         link.click();
      }
   };

   return (
      <div>
         <div ref={resultRef} className={styles.resultsShareBanner}>
            <Typography variant="h5">
               Look at my score on DEV QUIZZER
            </Typography>
            <Typography variant="h3">{score}/100</Typography>
            <div>
               <Typography>
                  Difficulty:{' '}
                  <i>
                     {params.difficulty !== '' ? params.difficulty : 'RANDOM'}
                  </i>
               </Typography>
               <Typography>
                  Category:{' '}
                  <i>{params.category !== '' ? params.category : 'RANDOM'}</i>
               </Typography>
            </div>
         </div>
         <div className={styles.resultsBtns}>
            <Button
               variant="outlined"
               onClick={handleDownloadImage}
               startIcon={<IosShareIcon />}
            >
               Download Results as Image
            </Button>
            <Button
               variant="contained"
               color="primary"
               onClick={onStartNewQuiz}
            >
               Start new quiz
            </Button>
         </div>

         {resultArray.map((q, i) => (
            <Typography key={q.id}>
               <i>Question {i + 1}:</i> {q.answer.text} |{' '}
               {q.answer.answer
                  .charAt(q.answer.answer.length - 1)
                  .toUpperCase()}{' '}
               | <b>{q.answer.isCorrect ? 'TRUE' : 'FALSE'}</b>
            </Typography>
         ))}
      </div>
   );
}
