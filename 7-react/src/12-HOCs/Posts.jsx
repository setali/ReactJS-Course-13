import React, { Component } from 'react'
import Button from './Button'
import acl from './acl'

const posts = Array(6)
  .fill(0)
  .map((el, i) => ({
    id: i + 1,
    title: `Title ${i + 1}`
  }))

class Posts extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        Post list
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.title}
              <Button permission='EDIT_POST'>Edit</Button>
              <Button permission='REMOVE_POST'>Remove</Button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const newComponent = acl(Posts)

export default newComponent
