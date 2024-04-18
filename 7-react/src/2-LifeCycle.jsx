import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor () {
    super()
    this.state = {
      user: {},
      count: 1
    }
    console.log('constructor')
  }

  componentDidMount () {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => this.setState({ user: data }))

    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  shouldComponentUpdate (props, state) {
    console.log(
      'shouldComponentUpdate'
      // JSON.stringify(state),
      // JSON.stringify(this.state)
    )

    if (state.count % 2 === 0) {
      return false
    }

    return true
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  UNSAFE_componentWillMount () {
    console.log('UNSAFE_componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        Welcome: {this.state.user.name}
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}
