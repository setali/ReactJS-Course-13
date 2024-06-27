import { useEffect, useState } from 'react'
import '../styles/general.css'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
// import random from 'lodash/random'

// const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function App ({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
  }, [])

  return (
    <div>
      {/* {random(1, 10)} */}
      {loading && 'Loading....'}
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  )
}
