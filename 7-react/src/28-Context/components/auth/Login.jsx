import { Navigate, useLocation } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import LoginForm from './LoginForm'
import Loading from '../utils/Loading'

export default function Login () {
  const { isLoggedIn, isLoading } = useUser()

  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }

  return (
    <div className='content box'>
      <h2>Login</h2>
      <LoginForm />
    </div>
  )
}
