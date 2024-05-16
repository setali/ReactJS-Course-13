import { Route, Routes } from 'react-router-dom'
import List from './List'
import Detail from './Detail'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Detail />} />
    </Routes>
  )
}
