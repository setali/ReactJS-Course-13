import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Divider } from '@/ui'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '@/redux/actions/post'

export default function Detail () {
  const { id } = useParams()

  const dispatch = useDispatch()
  const post = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Divider />
      <Link to='/posts'>بازگشت به لیست</Link>
    </div>
  )
}
