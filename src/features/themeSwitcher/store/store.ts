import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeState = {
   mode: ThemeMode;
   setMode: (mode: ThemeMode) => void;
   toggleMode: () => void;
   resolvedMode: 'light' | 'dark';
   setResolvedMode: (resolved: 'light' | 'dark') => void;
};

const getSystemTheme = (): 'light' | 'dark' => {
   if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
   ) {
      return 'dark';
   }
   return 'light';
};

export const useThemeStore = create<ThemeState>()(
   devtools(
      (set, get) => {
         let initialMode: ThemeMode = 'system';
         if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved === 'light' || saved === 'dark' || saved === 'system') {
               initialMode = saved;
            }
         }
         const initialResolved: 'light' | 'dark' =
            initialMode === 'system'
               ? typeof window !== 'undefined'
                  ? getSystemTheme()
                  : 'light'
               : (initialMode as 'light' | 'dark');

         return {
            mode: initialMode,
            resolvedMode: initialResolved,
            setMode: (mode) => {
               localStorage.setItem('theme', mode);
               set({
                  mode,
                  resolvedMode:
                     mode === 'system' && typeof window !== 'undefined'
                        ? getSystemTheme()
                        : (mode as 'light' | 'dark'),
               });
            },

            setResolvedMode: (resolved) => set({ resolvedMode: resolved }),
         };
      },
      { name: 'ThemeStore' }
   )
);

// React hook to sync system theme changes when mode is 'system'
export function useSystemThemeSync() {
   const mode = useThemeStore((state) => state.mode);
   const setResolvedMode = useThemeStore((state) => state.setResolvedMode);
   useEffect(() => {
      if (mode !== 'system') return;
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => {
         setResolvedMode(e.matches ? 'dark' : 'light');
      };
      setResolvedMode(mql.matches ? 'dark' : 'light');
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
   }, [mode, setResolvedMode]);
}
