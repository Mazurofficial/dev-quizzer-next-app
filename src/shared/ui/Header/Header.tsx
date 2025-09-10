'use client';

import logo from '@/assets/devquizzer_logo.svg';
import logo_dark from '@/assets/devquizzer_logo_dark.svg';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Nav from '../Navigation/Nav';
import ThemeSwitcher from '@/features/themeSwitcher/ui/ThemeSwitcher/ThemeSwitcher';
import { useThemeStore } from '@/features/themeSwitcher/store/store';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

export default function Header() {
   const theme = useThemeStore((state) => state.resolvedMode);

   return (
      <header className={styles.header}>
         <Link className={styles.logo_link} href="/">
            <Image
               src={theme === 'dark' ? logo_dark : logo}
               alt="LOGO"
               priority
            />
         </Link>
         <div className={styles.rightPart}>
            <Nav />
            <Link href="https://github.com/Mazurofficial/dev-quizzer-next-app">
               <IconButton color="primary" aria-label="github link">
                  <GitHubIcon />
               </IconButton>
            </Link>
            <ThemeSwitcher />
         </div>
         <MobileDrawer />
      </header>
   );
}
