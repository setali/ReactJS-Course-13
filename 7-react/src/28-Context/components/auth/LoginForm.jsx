import useUser from '../../hooks/useUser'

export default function LoginForm () {
  const { login } = useUser()

  function handleSubmit (e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = data.get('username')
    const password = data.get('password')

    login({ username, password })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label>Username:</label>
          <input name='username' />
        </div>
        <div className='form-item'>
          <label>Password</label>
          <input name='password' />
        </div>
        <div className='form-item'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
