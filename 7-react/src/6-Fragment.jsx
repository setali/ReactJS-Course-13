import React, { Component } from 'react'

export default class Fragment extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <tr key={user.id}>
                <Columns user={user} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

class Columns extends React.Component {
  render () {
    const { user } = this.props
    return (
      <>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </>
    )
    // return (
    //   <React.Fragment>
    //     <td>{user.name}</td>
    //     <td>{user.email}</td>
    //   </React.Fragment>
    // )
  }
}
