import { Button, Container, Typography } from '@mui/material';
import styles from './Styles.module.scss';

import Step from './Step';
import step1 from '@/assets/step1.png';
import step2 from '@/assets/step2.png';
import Link from 'next/link';

export default function HowItWorks() {
   return (
      <Container className={styles.howItWorks} maxWidth="lg">
         <Typography variant="h2" align="center">
            ⚙️ How It Works
         </Typography>
         <Link href="/compose-quiz">
            <Button variant="contained">Start new quiz</Button>
         </Link>
         <Step
            title="Fill in the form ✍️"
            description="Choose your quiz settings: number of questions, difficulty level (Easy, Medium, Hard), and question category."
            direction="right"
            number={1}
            image={step1}
         />
         <Step
            title="Start your quiz 🚀"
            description="Answer each question in real-time. Once you complete the quiz, you'll see your results"
            direction="left"
            number={2}
            image={step2}
         />
         <Step
            title="Share your results 🏆"
            description="Show off your skills! Share your quiz results with friends and colleagues."
            direction="right"
            number={3}
            image={step1}
         />
      </Container>
   );
}
