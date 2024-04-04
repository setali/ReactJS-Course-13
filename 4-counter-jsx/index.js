const rootContainer = document.getElementById('root')

class Counter extends React.Component {
  state = {
    counter: 0
  }

  render () {
    return (
      <div>
        <span className='value'>{this.state.counter}</span>
        <button
          style={{ marginLeft: '5px' }}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrease
        </button>
      </div>
    )
  }
}

const el = React.createElement(Counter)

const root = ReactDOM.createRoot(rootContainer)

root.render(
  <div>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter />
  </div>
)
