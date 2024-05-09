import { useState } from 'react'
import ThemeContext, { themes } from '../contexts/ThemeContext'

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(themes.light)

  function toggleTheme () {
    setTheme(theme => (theme === themes.light ? themes.dark : themes.light))
  }

  return (
    <div>
      <div>
        <button onClick={toggleTheme}>
          {theme === themes.light ? 'Dark' : 'Light'}
        </button>
      </div>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </div>
  )
}
