import Image from 'next/image';
import styles from './Results.module.scss';
import banana from '@/assets/banana.svg';
import bananaBackDrop from '@/assets/bananaBackDrop.svg';

type BananasP = {
   amount: number;
   value: number;
};

export default function Bananas({ amount, value }: BananasP) {
   return (
      <div className={styles.bananas}>
         {Array.from({ length: amount }).map((_, i) => (
            <Image
               key={i}
               src={i < value ? banana : bananaBackDrop}
               alt={i < value ? 'banana' : 'banana BackDrop'}
               style={{ width: 23, height: 46 }}
            />
         ))}
      </div>
   );
}
