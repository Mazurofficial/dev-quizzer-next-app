import { Drawer, IconButton } from '@mui/material';
import MobileNav from './MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import styles from './MobileDrawer.module.scss';

export default function MobileDrawer() {
   const [open, setOpen] = useState(false);
   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };
   return (
      <div className={styles.mobileDrawer}>
         <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={[open && { display: 'none' }]}
         >
            <MenuIcon />
         </IconButton>
         <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <MobileNav />
         </Drawer>
      </div>
   );
}
