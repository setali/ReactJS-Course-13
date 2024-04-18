import React, { Component } from 'react'

export default class AdvanceSetState extends Component {
  state = {
    todos: [],
    count: 0
  }

  generateTodo = () => {
    const time = Date.now()

    return {
      title: `Title ${time}`,
      id: time
    }
  }

  addTodo = () => {
    const todo = this.generateTodo()

    this.setState(state => ({ todos: [...state.todos, todo] }))
    console.log('addTodo', this.state.todos)
    // this.setState({ count: this.state.todos.length })
    this.setState(
      state => ({ count: state.todos.length }),
      () => {
        console.log('State updated')
      }
    )
  }

  render () {
    console.log('render', this.state.todos.length)
    return (
      <div>
        <button onClick={this.addTodo}>Add Todo</button>
        <div>Count: {this.state.count}</div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}
