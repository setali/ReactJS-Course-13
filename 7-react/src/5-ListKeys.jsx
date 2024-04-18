import React, { Component } from 'react'

export default class ListKeys extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={user.id}>
              {index} {user.name}
            </li>
          ))}
        </ul>

        {/* {[
          <div key={1}>Ali</div>,
          <div key={2}>Eli</div>,
          <div key={3}>Qoli</div>
        ]} */}
      </div>
    )
  }
}
