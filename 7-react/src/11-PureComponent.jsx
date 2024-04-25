import React, { Component, PureComponent } from 'react'

export default class Parent extends Component {
  state = {
    counter1: 1,
    counter2: 1
  }

  render () {
    console.log('parent')
    return (
      <div>
        <div>
          Counter1: {this.state.counter1}
          <button
            onClick={() =>
              this.setState(state => ({ counter1: state.counter1 + 1 }))
            }
          >
            +
          </button>
        </div>
        <div>
          Counter2: {this.state.counter2}
          <button
            onClick={() =>
              this.setState(state => ({ counter2: state.counter2 + 1 }))
            }
          >
            +
          </button>
        </div>
        <MyComponent counter={{ value: this.state.counter1 }} />
        {/* <MyPureComponent counter={this.state.counter1} /> */}
        <MyPureComponent counter={{ value: this.state.counter1 }} />
      </div>
    )
  }
}

class MyComponent extends Component {
  shouldComponentUpdate (newProps, newState) {
    console.log(newProps)
    if (newProps.counter.value === this.props.counter.value) {
      return false
    } else {
      return true
    }
  }

  render () {
    console.log('MyComponent', this.props.counter)
    return <div>MyComponent {this.props.counter.value}</div>
  }
}

class MyPureComponent extends PureComponent {
  render () {
    console.log('MyPureComponent', this.props.counter)
    return <div>MyPureComponent {this.props.counter.value}</div>
  }
}
