export type Theme = 'light' | 'dark';

/**
 * Resolves the active theme from localStorage or system preference.
 * This logic is mirrored in the inline <script> in layout.tsx to prevent
 * flash of unstyled content on initial page load.
 */
export function resolveTheme(): Theme {
  const saved = localStorage.getItem('theme') as Theme | null;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return saved === 'dark' || saved === 'light' ? saved : systemDark ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
