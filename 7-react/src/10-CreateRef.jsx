import React, { Component } from 'react'

export default class CreateRef extends Component {
  state = { show: false }

  inputRef = React.createRef()

  toggle = () => {
    this.setState(
      state => ({ show: !state.show }),
      () => {
        this.inputRef.current?.focus()
      }
    )
  }

  componentDidUpdate () {
    console.log('cDU', this.inputRef.current)
  }

  render () {
    return (
      <div>
        <button onClick={this.toggle}>Search</button>
        {/* {this.state.show && <input ref={this.inputRef} />} */}
        {/* {this.state.show && <input autoFocus />} */}
        <div style={{ visibility: this.state.show ? 'visible' : 'hidden' }}>
          <input ref={this.inputRef} />
        </div>
      </div>
    )
  }
}
