import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.decrease = this.decrease.bind(this)
    this.state = {
      counter: props.defaultValue
    }
  }

  // static defaultProps = {
  //   defaultValue: 5
  // }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decrease () {
    this.setState({ counter: this.state.counter - 1 })
  }

  render () {
    return (
      <div>
        <span className='value'>{this.state.counter}</span>
        <button style={{ marginLeft: '5px' }} onClick={this.increase}>
          Increase
        </button>
        <button onClick={this.decrease}>Decrease</button>
        {/* <button onClick={this.decrease.bind(this)}>Decrease</button> */}
        {/* <button onClick={() => this.decrease()}>Decrease</button> */}
      </div>
    )
  }
}

Counter.defaultProps = {
  defaultValue: 5
}
