
import React, { createContext, useState, useContext, useEffect } from 'react';

// Define available color themes
export type ColorTheme = 'purple' | 'blue' | 'green' | 'orange' | 'pink' | 'teal' | 'red' | 'yellow' | 'offwhite' | 'slate' | 'lavender';

interface ThemeContextType {
  currentTheme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'purple', // Default theme
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check for stored theme in localStorage or use default
  const [currentTheme, setCurrentTheme] = useState<ColorTheme>(() => {
    const savedTheme = localStorage.getItem('color-theme');
    return (savedTheme as ColorTheme) || 'purple';
  });

  // Update theme function
  const setTheme = (theme: ColorTheme) => {
    setCurrentTheme(theme);
    localStorage.setItem('color-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Set theme on initial load
  useEffect(() => {
    // Apply theme on initial load and when theme changes
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Make sure to set the theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme') as ColorTheme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
