import { Avatar, Chip, Container, Typography } from '@mui/material';
import styles from './Styles.module.scss';
import Image from 'next/image';
import nextjs from '@/assets/nextjs.png';
import tsquery from '@/assets/tsquery.png';
import zustand from '@/assets/zustand.png';
import reacthookform from '@/assets/reacthookform.png';
import zodimg from '@/assets/zod.png';
import materialui from '@/assets/mui.png';

export default function TechStack() {
   return (
      <Container className={styles.stack} maxWidth="lg">
         <Typography variant="h2" align="center">
            🧰 Tech Stack
         </Typography>
         <Typography align="center">
            DevQuizzer is built with modern, developer-friendly technologies to
            ensure speed, reliability, and a smooth user experience:
         </Typography>
         <div className={styles.technologies}>
            <Chip
               avatar={<Image src={nextjs} alt="Next" />}
               label="Next.js"
               variant="outlined"
               className={styles.technologies_item}
            />
            <Chip
               avatar={<Image src={tsquery} alt="TanStack" />}
               label="TanStack Query"
               variant="outlined"
               className={styles.technologies_item}
            />
            <Chip
               avatar={<Image src={zustand} alt="Zustand" />}
               label="Zustand"
               variant="outlined"
               className={styles.technologies_item}
            />
            <Chip
               avatar={<Image src={reacthookform} alt="React Hook Form" />}
               label="React Hook Form"
               variant="outlined"
               className={styles.technologies_item}
            />
            <Chip
               avatar={<Image src={zodimg} alt="Zod" />}
               label="Zod"
               variant="outlined"
               className={styles.technologies_item}
            />
            <Chip
               avatar={<Image src={materialui} alt="Material UI" />}
               label="Material UI"
               variant="outlined"
               className={styles.technologies_item}
            />
         </div>
      </Container>
   );
}
