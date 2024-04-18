import React, { Component } from 'react'

export default class Parent extends Component {
  render () {
    return (
      <div>
        <h2>Parent component</h2>
        <ErrorBoundaries>
          <Child />
        </ErrorBoundaries>
      </div>
    )
  }
}

class ErrorBoundaries extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError (error) {
    console.log('Error', error)

    return {
      hasError: true
    }
  }

  // componentDidCatch (error) {
  //   console.log('Error', error)
  //   this.setState({ hasError: true })
  // }

  render () {
    if (this.state.hasError) {
      return 'OOOps, there is an error ...'
    }

    return this.props.children
  }
}

class Child extends Component {
  state = { count: 1 }

  componentDidUpdate () {
    if (this.state.count === 5) {
      throw new Error('App crashed!!!')
    }
  }

  render () {
    return (
      <div>
        Count: {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    )
  }
}
