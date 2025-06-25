'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light')
  const [isHydrated, setIsHydrated] = useState(false)

  // Always initialize with light theme - ignore localStorage
  useEffect(() => {
    setThemeState('light')
    setIsHydrated(true)
  }, [])

  // Update document when theme changes (but don't save to localStorage)
  useEffect(() => {
    if (isHydrated) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, isHydrated])

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Prevent hydration mismatch by not rendering until theme is determined
  if (!isHydrated) {
    return (
      <div
        className='flex items-center justify-center min-h-screen'
        style={{ backgroundColor: '#F5F7FA' }}
      >
        <div className='spinner w-8 h-8'></div>
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
