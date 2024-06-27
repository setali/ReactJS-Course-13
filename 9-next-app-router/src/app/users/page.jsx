import Link from 'next/link'

export const metadata = {
  title: 'Users',
  description: 'Generated by create next app'
}

export default async function Users () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache: 'no-cache',
    next: {
      revalidate: 5
    }
  })
  const users = await res.json()
  console.log('users', users.length)

  return (
    <div>
      <h2>Users list</h2>
      <ol>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}