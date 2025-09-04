'use client';

import Image from 'next/image';
import { Button, Container, Typography, Zoom } from '@mui/material';
import monkey from '@/assets/monkeyquizzer.webp';
import Link from 'next/link';
import styles from './Styles.module.scss';
import useResetQuiz from '@/features/quiz/hooks/useResetQuiz';

export default function HeroSection() {
   const resetQuiz = useResetQuiz();
   return (
      <Container className={styles.hero} maxWidth="lg">
         <div className={styles.hero_image}>
            <Zoom in={true} timeout={800}>
               <Image src={monkey} alt="Hero banner image" />
            </Zoom>
         </div>

         <div className={styles.hero_text}>
            <Typography variant="h1" gutterBottom>
               DevQuizzer - Your go-to quiz for developers
            </Typography>
            <Typography>
               Test your coding knowledge with random dev-focused quizzes, or
               configure your own challenge.
            </Typography>
            <div className={styles.hero_btns}>
               <Link href="/compose-quiz">
                  <Button variant="contained">Configure New Quiz</Button>
               </Link>
               <Link href="/quiz?limit=10">
                  <Button variant="outlined" onClick={resetQuiz}>
                     Start Random Quiz
                  </Button>
               </Link>
            </div>
         </div>
      </Container>
   );
}
