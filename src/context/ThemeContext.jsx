import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState()
  function handleTheme() {
    setTheme(prev => {
      const themeInfo = prev === "light" ? "dark" : "light"
      document.documentElement.setAttribute('data-bs-theme', themeInfo)
      window.localStorage.setItem('theme', themeInfo)
      return themeInfo
    })
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(localTheme)
    document.documentElement.setAttribute('data-bs-theme', localTheme)
  }, [])
  return <ThemeContext.Provider value={{ theme, handleTheme }}>
    {children}
  </ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }