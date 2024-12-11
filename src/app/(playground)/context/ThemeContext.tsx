'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check cookie first
    const cookieTheme = document.cookie
      .split('; ')
      .find(row => row.startsWith('theme='))
      ?.split('=')[1] as Theme;
      
    // If cookie exists, use it
    if (cookieTheme) {
      return cookieTheme;
    }
    
    // Otherwise check localStorage as fallback
    const storedTheme = localStorage.getItem('theme') as Theme;
    return storedTheme || 'light';
  });

  // Update both cookie and localStorage when theme changes
  useEffect(() => {
    document.cookie = `theme=${theme};path=/;max-age=31536000`; // 1 year expiry
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}