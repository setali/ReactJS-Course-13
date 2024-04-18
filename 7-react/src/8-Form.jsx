import React, { Component } from 'react'

export default class Form extends Component {
  handleSubmit = event => {
    event.preventDefault()

    const data = new FormData(event.target)


    console.log(data.get('username'))
    console.log(data.get('password'))
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type='text' name='username' />
          <label>Password</label>
          <input type='text' name='password' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

// export default class Form extends Component {
//   state = {
//     username: '',
//     password: ''
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     console.log(this.state)
//   }

//   handleChangeInput = event => {
//     this.setState({ [event.target.name]: event.target.value })
//   }

//   render () {
//     console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Username</label>
//           <input
//             type='text'
//             value={this.state.username}
//             name='username'
//             onChange={this.handleChangeInput}
//           />
//           <label>Password</label>
//           <input
//             type='text'
//             value={this.state.password}
//             name='password'
//             onChange={this.handleChangeInput}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default class Form extends Component {
//   state = {
//     username: '',
//     password: ''
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     console.log(this.state)
//   }

//   handleChangeUsername = event => {
//     this.setState({ username: event.target.value })
//   }

//   handleChangePassword = event => {
//     this.setState({ password: event.target.value })
//   }

//   render () {
//     console.log(this.state)
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Username</label>
//           <input
//             type='text'
//             value={this.state.username}
//             onChange={this.handleChangeUsername}
//           />
//           <label>Password</label>
//           <input
//             type='text'
//             value={this.state.password}
//             onChange={this.handleChangePassword}
//           />
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }
