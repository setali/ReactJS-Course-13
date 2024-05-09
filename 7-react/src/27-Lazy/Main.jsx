import React, { useState } from 'react'

const Heavy = React.lazy(() => import('./Heavy'))

export default function Parent () {
  const [mount, setMount] = useState(false)
  return (
    <div>
      <button onClick={() => setMount(m => !m)}>
        {mount ? 'Unmount' : 'Mount'}
      </button>
      {mount && <LazyMode />}
    </div>
  )
}

function LazyMode () {
  return (
    <div>
      Main
      <React.Suspense fallback='Loading ....'>
        <Heavy />
      </React.Suspense>
    </div>
  )
}
