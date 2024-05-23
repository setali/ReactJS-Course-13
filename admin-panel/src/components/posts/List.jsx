import { useEffect, useState } from 'react'
import request from '@/tools/request'
import { Table } from '@/ui'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

export default function List () {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  function getData () {
    setLoading(true)
    request('/posts')
      .then(({ data }) => setPosts(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  const columns = [
    { title: 'ID', key: 'id' },
    { title: 'Title', key: 'title' },
    {
      key: 'action',
      render: (_, r) => (
        <Link to={`/posts/${r.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  return <Table data={posts} columns={columns} loading={loading} />
}
