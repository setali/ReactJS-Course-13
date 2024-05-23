import Routing from './Routing'
import Footer from '@/components/general/Footer'
import Header from '@/components/general/Header'
import Sidebar from '@/components/general/Sidebar'
import Providers from '@/providers'
import { Layout } from '@/ui'
import '../assets/style/main.css'

const { Content } = Layout

function App () {
  return (
    <Providers>
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Content className='content'>
            <Routing />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Providers>
  )
}

export default App
