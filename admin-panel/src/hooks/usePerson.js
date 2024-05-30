import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPerson } from '@/redux/actions/person'
import request from '@/tools/request'

export default function usePerson (id) {
  const dispatch = useDispatch()

  const person = useSelector(state => state.person)

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)))
  }, [id])

  return person
}
