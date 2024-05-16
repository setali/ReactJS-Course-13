import useTheme from '../../hooks/useTheme'

export default function Page404 () {
  const theme = useTheme()

  return (
    <div className='content box' style={theme}>
      <h2>404</h2>
      <p>Page Not found </p>
    </div>
  )
}
