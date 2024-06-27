import Link from 'next/link'
import Main from '@/layouts/Main'
import axios from 'axios'
import Head from 'next/head'

export default function Users ({ users }) {
  return (
    <Main>
      <Head>
        <title>Users list</title>
      </Head>
      <h2>Users list</h2>
      <ol>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

async function getData () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return data
}

// function getData () {
//   return new Promise(resolve => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data => resolve(data))
//   })
// }

export async function getServerSideProps () {
  //   const { data: users } = await axios(
  //     'https://jsonplaceholder.typicode.com/users'
  //   )

  // throw new Error('My Error')

  const users = await getData()

  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const users = await response.json()

  return {
    props: {
      users
    }
  }
}
