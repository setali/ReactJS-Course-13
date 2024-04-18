import React, { Component } from 'react'

export default class Parent extends Component {
  state = {
    mount: true
  }

  render () {
    return (
      <div>
        <button onClick={() => this.setState({ mount: !this.state.mount })}>
          {this.state.mount ? 'UnMount' : 'Mount'}
        </button>
        {/* {this.state.mount && <Child />} */}
        <div style={{ visibility: this.state.mount ? 'visible' : 'hidden' }}>
          <Child />
        </div>
        <div className={`box container ${this.state.mount ? 'ali' : ''} `}>
          Ali
        </div>
      </div>
    )
  }
}

class Child extends Component {
  state = { count: 0 }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  componentDidMount () {
    console.log('componentDidMount')
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, [1000])
  }

  render () {
    return <div>Child: {this.state.count}</div>
  }
}
