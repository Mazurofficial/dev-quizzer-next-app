'use client';

import html2canvas from 'html2canvas';
import styles from './Results.module.scss';
import { useQuizStore } from '@/features/quiz/store/store';
import { buildResultArray } from '@/utils/buildResultArray';
import { Button, Paper, Typography } from '@mui/material';
import { useRef } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useParamsStore } from '@/features/params/store/store';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/devquizzer_logo.svg';
import logo_dark from '@/assets/devquizzer_logo_dark.svg';
import Bananas from './Bananas';
import { useThemeStore } from '@/features/themeSwitcher/store/store';

export default function Results() {
   const quizIds = useQuizStore((state) => state.quizIds);
   const userAnswers = useQuizStore((state) => state.userAnswers);
   const { score, resultArray } = buildResultArray(quizIds, userAnswers);
   const params = useParamsStore((state) => state.params);
   const resultRef = useRef(null);
   const theme = useThemeStore((state) => state.resolvedMode);

   const handleDownloadImage = async () => {
      if (resultRef.current) {
         const canvas = await html2canvas(resultRef.current, {
            backgroundColor: '#fff',
            useCORS: true,
         });
         const link = document.createElement('a');
         link.download = 'quiz-results.png';
         link.href = canvas.toDataURL('image/png');
         link.click();
      }
   };

   const calcBananas = (difficulty: typeof params.difficulty) => {
      if (difficulty === 'Easy') return 1;
      if (difficulty === 'Medium') return 2;
      if (difficulty === 'Hard') return 3;
      else return 0;
   };

   const selectTitleByScore = (score: number) => {
      if (score < 40) return 'Banana Dropper';
      if (score < 60) return 'Tree Climber';
      if (score < 75) return 'Banana Collector';
      if (score < 90) return 'Jungle Hero';
      if (score < 101) return 'Monkey King';
      else return 'Try again';
   };

   const selectPicByScore = (score: number) => {
      if (score < 40) return styles.monkey_bananaDropper;
      if (score < 60) return styles.monkey_treeClimber;
      if (score < 75) return styles.monkey_bananaCollector;
      if (score < 90) return styles.monkey_jungleHero;
      if (score < 101) return styles.monkey_monkeyKing;
      else return 'Try again';
   };

   return (
      <div className={styles.results}>
         <Paper
            elevation={3}
            ref={resultRef}
            className={styles.resultsShareBanner}
         >
            <div className={styles.monkeyImg}>
               <div className={selectPicByScore(score)}></div>
            </div>
            <div className={styles.resultsInfo}>
               <Typography variant="h5">
                  Look at my knowledge score of{' '}
                  <Typography variant="h5" component="span" color="primary">
                     {params.category}
                  </Typography>
               </Typography>
               <div className={styles.resultsInfo_center}>
                  <Typography variant="h2" sx={{ fontSize: '50px' }}>
                     {selectTitleByScore(score)}
                  </Typography>
                  <Typography variant="h2" color="primary">
                     {!Number.isNaN(score) ? score : 0}
                     <Typography component="span">/100</Typography>
                  </Typography>
                  <div className={styles.difficulty}>
                     <Typography variant="h5" component="p">
                        Difficulty:
                     </Typography>
                     <Bananas
                        amount={3}
                        value={calcBananas(params.difficulty)}
                     />
                  </div>
               </div>
               <Typography component="p" className={styles.poweredBy}>
                  powered by{' '}
                  {
                     <Image
                        src={theme === 'dark' ? logo_dark : logo}
                        alt="logo"
                        height="20"
                     />
                  }
               </Typography>
            </div>
         </Paper>
         <div className={styles.resultsBtns}>
            <Button
               variant="contained"
               onClick={handleDownloadImage}
               startIcon={<IosShareIcon />}
            >
               Download Results as Image
            </Button>
            <Button variant="outlined" color="primary">
               <Link href="/compose-quiz">Start new quiz</Link>
            </Button>
         </div>
         <QuizAnswers answers={resultArray} />
      </div>
   );
}
