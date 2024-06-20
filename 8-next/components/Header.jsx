import Image from 'next/image'
import logo from '../public/images/logo.png'

export default function Header () {
  return (
    <header>
      {/* <img src={'/images/logo.png'} /> */}
      <Image
        style={{ backgroundColor: 'black' }}
        // src={'/images/logo.png'}
        // width={196}
        // height={72}
        alt='Logo'
        src={logo}
        priority
      />
      <h2>My Header</h2>
      <style jsx>{`
        img {
          background-color: black;
        }
        header {
          display: flex;
        }
        h2 {
          margin: 1rem;
        }
      `}</style>
    </header>
  )
}
