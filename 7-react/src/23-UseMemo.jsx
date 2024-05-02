import FlatToNested from 'flat-to-nested'
import React, { useEffect, useMemo, useState } from 'react'

const flatToNested = new FlatToNested({ parent: 'parentId' })

const data = [
  { id: 1, title: 'Yek', parentId: null },
  { id: 2, title: 'Do', parentId: 1 },
  { id: 3, title: 'Se', parentId: 1 },
  { id: 4, title: 'Chahr', parentId: 2 },
  { id: 5, title: 'Panj', parentId: 2 },
  { id: 6, title: 'Shesh', parentId: 3 }
]

const treeData = [
  {
    id: 1,
    title: 'Yek',
    children: [
      {
        id: 2,
        title: 'Do',
        children: [
          { id: 4, title: 'Chahr' },
          { id: 5, title: 'Panj' }
        ]
      },
      { id: 3, title: 'Se', children: [{ id: 6, title: 'Shesh' }] }
    ]
  }
]

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(m => !m)}>
        {mount ? 'Unmount' : 'Mount'}
      </button>
      {mount && <Child />}
    </div>
  )
}

function Child () {
  const [count, setCount] = useState(1)

  const nested = useMemo(() => {
    return flatToNested.convert(data)
  }, [data])

  function heavyProcess () {
    return (9999999n ** 999999n).toString().length
  }

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 500)
  }, [])

  const value = useMemo(() => {
    return heavyProcess()
  }, [])

  return (
    <div>
      Count: {count}
      <hr />
      Value: {value}
    </div>
  )
}
