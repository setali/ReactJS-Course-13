import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'
import { BrowserRouter as Router } from 'react-router-dom'

export default function Providers ({ children }) {
  return (
    <Router>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </Router>
  )
}
