import useUser from '../../hooks/useUser'
import useTheme from '../../hooks/useTheme'

export default function Profile () {
  const theme = useTheme()
  const { user } = useUser()

  return (
    <div className='content box' style={theme}>
      <h2>Profile</h2>
      <div>Name: {user.name}</div>
    </div>
  )
}
