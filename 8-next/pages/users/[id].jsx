import { useRouter } from 'next/router'
import Main from '../../layouts/Main'
import axios from 'axios'

export default function User ({ user }) {
  const { query } = useRouter()
  console.log(query.id)

  return (
    <Main>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Main>
  )
}

export async function getServerSideProps ({ params: { id } }) {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )

  return {
    props: {
      user
    }
  }
}
