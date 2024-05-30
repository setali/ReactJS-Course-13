import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '@/tools/request'
import { Divider } from '@/ui'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '@/redux/actions/post'

export default function Detail () {
  const { id } = useParams()

  const dispatch = useDispatch()
  const post = useSelector(state => state.post)

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))
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
