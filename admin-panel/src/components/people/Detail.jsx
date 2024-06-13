import { Link, useParams } from 'react-router-dom'
import usePerson from '@/hooks/usePerson'
import { Divider, Spin } from '@/ui'

export default function Detail () {
  const { id } = useParams()

  const { person, loading } = usePerson(id)

  if (loading) {
    return <Spin fullscreen />
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <div>Email: {person.email}</div>
      <Divider />
      <Link to='/people'>بازگشت به لیست</Link>
    </div>
  )
}
