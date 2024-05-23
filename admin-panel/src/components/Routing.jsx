import PeopleRouter from '@/components/people/Router'
import PostsRouter from '@/components/posts/Router'
import Dashboard from '@/components/user/Dashboard'
import { Route, Routes } from 'react-router-dom'
import '../assets/style/main.css'


export default function Routing () {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/people/*' element={<PeopleRouter />} />
      <Route path='/posts/*' element={<PostsRouter />} />
    </Routes>
  )
}
