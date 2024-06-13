import Link from 'next/link'

export default function Sidebar () {
  return (
    <aside>
      <menu>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </menu>
    </aside>
  )
}
