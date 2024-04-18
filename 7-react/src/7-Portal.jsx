import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends Component {
  state = { count: 0 }

  componentDidMount () {
    setInterval(() => this.setState({ count: this.state.count + 1 }), 1000)
  }

  render () {
    // return <div>{this.state.count}</div>
    return ReactDOM.createPortal(
      <div>{this.state.count}</div>,
      document.getElementById('portal')
    )
  }
}
