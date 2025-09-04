import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material';
import theme from '@/shared/theme';
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from '@/shared/ui/Header/Header';
import Footer from '@/shared/ui/Footer/Footer';
import ThemeProviderWrapper from '@/shared/providers/ThemeProviderWrapper';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: 'Dev Quizzer',
   description: 'Interactive quiz for developers next app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <AppRouterCacheProvider>
               <ThemeProviderWrapper>
                  <QueryProvider>
                     <Header />
                     {children} <ReactQueryDevtools />
                     <Footer />
                  </QueryProvider>
               </ThemeProviderWrapper>
            </AppRouterCacheProvider>
         </body>
      </html>
   );
}
