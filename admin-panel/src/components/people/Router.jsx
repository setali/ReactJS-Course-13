import { Route, Routes } from 'react-router-dom'
import List from './List'
import Add from './Add'
import Detail from './Detail'
import Edit from './Edit'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/add' element={<Add />} />
      <Route path='/:id' element={<Detail />} />
      <Route path='/:id/edit' element={<Edit />} />
    </Routes>
  )
}
