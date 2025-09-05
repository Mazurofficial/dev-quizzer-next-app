'use client';

import { createTheme } from '@mui/material/styles';

const typography = {
   h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      '@media (min-width:600px)': { fontSize: '3.5rem' },
      '@media (min-width:900px)': { fontSize: '4.375rem' },
   },
   h2: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (min-width:600px)': { fontSize: '2.75rem' },
      '@media (min-width:900px)': { fontSize: '3.4375rem' },
   },
   h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      '@media (min-width:600px)': { fontSize: '2rem' },
      '@media (min-width:900px)': { fontSize: '2.375rem' },
   },
   h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      '@media (min-width:600px)': { fontSize: '1.75rem' },
      '@media (min-width:900px)': { fontSize: '2rem' },
   },
   h5: {
      fontWeight: 600,
      fontSize: '1.125rem',
      '@media (min-width:600px)': { fontSize: '1.25rem' },
      '@media (min-width:900px)': { fontSize: '1.375rem' },
   },
};

export const lightTheme = createTheme({
   palette: {
      primary: { main: '#2563eb', dark: '#1d4ed8' },
      secondary: { main: '#1d4ed8' },
      error: { main: '#C03221', dark: '#9a180a' },
      background: { default: '#f9fafb', paper: '#ffffff' },
      text: { primary: '#111827', secondary: '#111111' },
   },
   typography,
});

export const darkTheme = createTheme({
   palette: {
      primary: { main: '#2563eb', dark: '#1d4ed8' },
      secondary: { main: '#818cf8' },
      error: { main: '#f87171', dark: '#b91c1c' },
      background: { default: '#18181b', paper: '#27272a' },
      text: { primary: '#f3f4f6', secondary: '#a1a1aa' },
   },
   typography,
});
