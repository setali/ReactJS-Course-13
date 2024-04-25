import React, { Component } from 'react'
import Posts from './Posts'
import Button from './Button'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>App</h2>
        <Button
          className={'button'}
          style={{ color: 'red' }}
          permission='ADD_POST'
        >
          Add Post
        </Button>
        <Posts permission='VIEW_POST_LIST' />
      </div>
    )
  }
}
