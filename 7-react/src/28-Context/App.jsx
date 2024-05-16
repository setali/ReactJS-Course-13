import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import Providers from './providers'
import Routing from './Routing'
import './assets/styles/main.css'

export default function ContextApp () {
  return (
    <div>
      <Providers>
        <Header />
        <div className='main'>
          <Sidebar />
          <Routing />
        </div>
        <Footer />
      </Providers>
    </div>
  )
}
