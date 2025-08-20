import { Paper, Slide, Typography } from '@mui/material';
import Image, { type StaticImageData } from 'next/image';
import styles from './Styles.module.scss';

type StepP = {
   title: string;
   description: string;
   number: number;
   image: StaticImageData;
   direction?: 'down' | 'left' | 'right' | 'up';
};

export default function Step({
   title,
   description,
   number,
   image,
   direction = 'down',
}: StepP) {
   return (
      <div
         style={
            direction === 'left'
               ? { display: 'flex' }
               : { display: 'flex', flexDirection: 'row-reverse' }
         }
         className={styles.step}
      >
         <Paper>
            <Image src={image} alt={title} />
         </Paper>

         <div className={styles.info}>
            <Typography variant="h3">
               {number}. {title}
            </Typography>
            <Typography>{description}</Typography>
         </div>
      </div>
   );
}
