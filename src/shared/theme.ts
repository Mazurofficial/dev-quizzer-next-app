'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
      primary: {
         main: '#2563eb', // $primary-color
         dark: '#1d4ed8', // $primary-hover-color
      },
      secondary: {
         main: '#1d4ed8', // $secondary-color
      },
      error: {
         main: '#C03221', // $red-color
         dark: '#9a180a', // $red-color-hover
      },
      background: {
         default: '#f9fafb', // $bg-color
         paper: '#ffffff',
      },
      text: {
         primary: '#111827', // $text-color
         secondary: '#111111', // $dark-color
      },
   },
   typography: {
      h1: {
         fontWeight: 600,
         fontSize: '2.5rem', // ~40px (mobile)
         '@media (min-width:600px)': {
            fontSize: '3.5rem', // ~56px (tablet)
         },
         '@media (min-width:900px)': {
            fontSize: '4.375rem', // 70px (desktop)
         },
      },
      h2: {
         fontWeight: 600,
         fontSize: '2rem', // ~32px (mobile)
         '@media (min-width:600px)': {
            fontSize: '2.75rem', // ~44px (tablet)
         },
         '@media (min-width:900px)': {
            fontSize: '3.4375rem', // 55px (desktop)
         },
      },
      h3: {
         fontWeight: 600,
         fontSize: '1.75rem', // ~28px (mobile)
         '@media (min-width:600px)': {
            fontSize: '2rem', // ~32px (tablet)
         },
         '@media (min-width:900px)': {
            fontSize: '2.375rem', // 38px (desktop)
         },
      },
      h4: {
         fontWeight: 600,
         fontSize: '1.5rem', // ~24px (mobile)
         '@media (min-width:600px)': {
            fontSize: '1.75rem', // ~28px (tablet)
         },
         '@media (min-width:900px)': {
            fontSize: '2rem', // 32px (desktop)
         },
      },
      h5: {
         fontWeight: 600,
         fontSize: '1.125rem', // ~18px (mobile)
         '@media (min-width:600px)': {
            fontSize: '1.25rem', // ~20px (tablet)
         },
         '@media (min-width:900px)': {
            fontSize: '1.375rem', // 22px (desktop)
         },
      },
   },
});

export default theme;
