import Home from './components/general/Home'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import AuthProvider from './providers/AuthProvider'
import ThemeProvider from './providers/ThemeProvider'
import './assets/styles/main.css'

export default function ContextApp () {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
          <Header />
          <div className='main'>
            <Sidebar />
            <Home />
          </div>
          <Footer />
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}
