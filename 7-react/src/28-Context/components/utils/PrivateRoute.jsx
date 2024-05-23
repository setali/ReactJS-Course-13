import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import Loading from './Loading'

export default function PrivateRoute () {
  const { isLoggedIn, isLoading } = useUser()

  const location = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location.pathname }} />
  }

  return <Outlet />
}
