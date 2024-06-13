import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPerson } from '@/redux/actions/person'

export default function usePerson (id) {
  const dispatch = useDispatch()

  const person = useSelector(state => state.person)
  const loading = useSelector(state => state.personLoading)

  useEffect(() => {
    dispatch(getPerson(id))
  }, [id])

  return { person, loading }
}
