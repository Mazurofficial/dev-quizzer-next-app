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
      fontFamily: ['Geologica', 'sans-serif'].join(','), // $font-main
      fontSize: 16, // $font-size-base
      h1: {
         fontSize: '70px',
         fontWeight: '600',
      },
      h2: {
         fontSize: '55px',
         fontWeight: '600',
      },
      h3: {
         fontSize: '38px',
         fontWeight: '600',
      },
      h4: {
         fontSize: '32px',
         fontWeight: '600',
      },
      h5: {
         fontSize: '22px',
         fontWeight: '600',
      },
   },
});

export default theme;
