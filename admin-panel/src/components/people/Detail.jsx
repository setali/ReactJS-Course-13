import usePerson from '@/hooks/usePerson'
import { Divider } from '@/ui'
import { Link, useParams } from 'react-router-dom'

export default function Detail () {
  const { id } = useParams()

  const person = usePerson(id)

  return (
    <div>
      <h2>{person.name}</h2>
      <div>Email: {person.email}</div>
      <Divider />
      <Link to='/people'>بازگشت به لیست</Link>
    </div>
  )
}
