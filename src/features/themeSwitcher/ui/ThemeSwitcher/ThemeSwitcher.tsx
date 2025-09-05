'use client';

import { useThemeStore } from '@/features/themeSwitcher/store/store';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';

export default function ThemeSwitcher() {
   const mode = useThemeStore((state) => state.mode);
   const setMode = useThemeStore((state) => state.setMode);

   const handleTheme = (
      event: React.MouseEvent<HTMLElement>,
      theme: typeof mode
   ) => {
      setMode(theme);
   };

   return (
      <>
         <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleTheme}
            aria-label="theme switcher"
            color="primary"
            size="small"
         >
            <ToggleButton value="system" aria-label="system">
               <HdrAutoIcon />
            </ToggleButton>
            <ToggleButton value="light" aria-label="light">
               <LightModeIcon />
            </ToggleButton>
            <ToggleButton value="dark" aria-label="dark">
               <DarkModeIcon />
            </ToggleButton>
         </ToggleButtonGroup>
      </>
   );
}
