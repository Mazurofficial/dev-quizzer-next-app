'use client';

import styles from './MobileDrawer.module.scss';
import { IconButton, Link } from '@mui/material';
import Nav from '../Navigation/Nav';
import ThemeSwitcher from '@/features/themeSwitcher/ui/ThemeSwitcher/ThemeSwitcher';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MobileNav() {
   return (
      <div className={styles.mobileNav}>
         <Nav />
         <ThemeSwitcher />
         <Link href="https://github.com/Mazurofficial/dev-quizzer-next-app">
            <IconButton color="primary" aria-label="github link">
               <GitHubIcon />
            </IconButton>
         </Link>
      </div>
   );
}
