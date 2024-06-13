import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Main ({ children }) {
  return (
    <div>
      <Header />
      <section style={{ display: 'flex' }}>
        <Sidebar />
        <article>{children}</article>
      </section>
      <Footer />
    </div>
  )
}
