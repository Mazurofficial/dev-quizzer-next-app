import logo from '@/assets/devquizzer_logo.svg';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
   return (
      <header className={styles.header}>
         <Image src={logo} alt="LOGO" />
         <Link href="https://github.com/Mazurofficial/dev-quizzer-next-app">
            <IconButton color="primary">
               <GitHubIcon />
            </IconButton>
         </Link>
      </header>
   );
}
