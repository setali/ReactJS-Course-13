import React, { Component } from 'react'
import acl from './acl'

class Button extends Component {
  render () {
    return <button {...this.props}>{this.props.children}</button>
  }
}

export default acl(Button)
