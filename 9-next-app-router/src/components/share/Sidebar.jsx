import Link from 'next/link'
import React from 'react'

export default function Sidebar () {
  return (
    <aside>
      <menu>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
          <li>
            <Link href='/posts'>Posts</Link>
          </li>
        </ul>
      </menu>
    </aside>
  )
}
