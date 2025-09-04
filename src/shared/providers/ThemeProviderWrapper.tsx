'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/shared/theme';
import type { Theme } from '@emotion/react';

export default function ThemeProviderWrapper({
   children,
}: {
   children: React.ReactNode;
}) {
   const [mounted, setMounted] = useState(false);
   const [mode, setMode] = useState<'light' | 'dark'>('light');

   useEffect(() => {
      const saved = window.localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') {
         setMode(saved as 'light' | 'dark');
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
         setMode('dark');
      }
      setMounted(true);
   }, []);

   if (!mounted) return null; // Prevent hydration mismatch

   const muiTheme: Theme =
      typeof theme === 'object' && 'light' in theme && 'dark' in theme
         ? (theme[mode] as Theme)
         : (theme as Theme);

   return (
      <ThemeProvider theme={muiTheme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
}
