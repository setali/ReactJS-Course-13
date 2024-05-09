import React from 'react'

const ThemeContext = React.createContext()

export const themes = {
  dark: { color: 'white', backgroundColor: 'black' },
  light: { color: 'black', backgroundColor: 'white' }
}

export default ThemeContext
