import React, { useEffect, useState } from 'react'

// count 1 => 12AB3F
// count 2 => AB45A1

export default function AdvanceStateEffect () {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setInterval(() => {
      console.log('salam', count)
      //   setCount(count => {
      //     console.log('inside', count)
      //     return count + 1
      //   })
      setCount(s => s + 1)
      setCount(count => count + 1)
    }, 1000)
  }, [])

  console.log(count)

  return <div>Count: {count}</div>
}

// count = 2
// function setCount (value) {
//   if (typeof value === 'function') {
//     count = value(count)
//   }
// }
