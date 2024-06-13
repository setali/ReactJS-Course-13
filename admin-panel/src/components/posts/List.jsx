import { useEffect } from 'react'
import { Table } from '@/ui'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPosts } from '@/redux/actions/post'

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

function List ({ getItems, posts }) {
  useEffect(() => {
    getItems()
  }, [])

  return <Table data={posts} columns={columns} loading={!posts.length} />
}

function mapStateToProps (state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getItems: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
