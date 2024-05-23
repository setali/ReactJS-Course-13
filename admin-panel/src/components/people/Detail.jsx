import request from '@/tools/request'
import { Divider } from '@/ui'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Detail () {
  const [person, setPerson] = useState({})
  const { id } = useParams()

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setPerson(data))
  }, [id])

  return (
    <div>
      <h2>{person.name}</h2>
      <div>Email: {person.email}</div>
      <Divider />
      <Link to='/people'>بازگشت به لیست</Link>
    </div>
  )
}
