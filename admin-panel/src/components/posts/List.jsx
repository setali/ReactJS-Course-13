import { useEffect, useState } from 'react'
import request from '@/tools/request'
import { Table } from '@/ui'
import { EyeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setPosts } from '@/redux/actions/post'

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

function List ({ setItems, posts }) {
  useEffect(() => {
    request('/posts').then(({ data }) => setItems(data))
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
    setItems: data => dispatch(setPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
