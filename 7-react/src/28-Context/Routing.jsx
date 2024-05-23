import { Route, Routes } from 'react-router-dom'
import ArticleRouter from './components/article/Router'
import Login from './components/auth/Login'
import Page404 from './components/general/404'
import About from './components/general/About'
import Contact from './components/general/Contact'
import Home from './components/general/Home'
import Dashboard from './components/user/Dashboard'
import Profile from './components/user/Profile'
import RequiredAuth from './components/utils/RequiredAuth'
import PrivateRoute from './components/utils/PrivateRoute'

export default function Routing () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/article/*' element={<ArticleRouter />} />
      <Route path='/login' element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>

      {/* <Route
        path='/profile'
        element={
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        }
      />
      <Route
        path='/dashboard'
        element={<RequiredAuth component={<Dashboard />} />}
      /> */}
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}
