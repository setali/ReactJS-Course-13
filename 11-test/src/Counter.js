import React, { useState } from 'react'

export default function Counter () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>My Counter</h3>
      <span data-testid='counter-value'>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
