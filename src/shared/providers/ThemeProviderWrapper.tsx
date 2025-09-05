'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/shared/theme';
import type { Theme } from '@emotion/react';
import {
   useThemeStore,
   useSystemThemeSync,
} from '@/features/themeSwitcher/store/store';
import { useEffect, useState, type ReactNode } from 'react';

export default function ThemeProviderWrapper({
   children,
}: {
   children: ReactNode;
}) {
   useSystemThemeSync();
   const resolvedMode = useThemeStore((state) => state.resolvedMode);
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;

   const muiTheme: Theme = resolvedMode === 'dark' ? darkTheme : lightTheme;

   return (
      <ThemeProvider theme={muiTheme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
}
