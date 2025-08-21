'use client';

import html2canvas from 'html2canvas';
import styles from './Results.module.scss';
import { useQuizStore } from '@/features/quiz/store/store';
import { buildResultArray } from '@/utils/buildResultArray';
import { Button, Typography } from '@mui/material';
import { useRef } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useParamsStore } from '@/features/params/store/store';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import Link from 'next/link';

export default function Results() {
   const quizIds = useQuizStore((state) => state.quizIds);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const { score, resultArray } = buildResultArray(quizIds, userAnswers);
   const params = useParamsStore((state) => state.params);
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
            <Button variant="contained" color="primary">
               <Link href="/compose-quiz">Start new quiz</Link>
            </Button>
         </div>
         <QuizAnswers answers={resultArray} />
      </div>
   );
}
