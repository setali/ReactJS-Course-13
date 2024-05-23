import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import List from './List'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/:id' element={<Detail />} />
    </Routes>
  )
}
