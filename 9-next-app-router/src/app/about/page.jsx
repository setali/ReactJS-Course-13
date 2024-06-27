'use client'

import { useEffect, useState } from 'react'

export default function About () {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    setInterval(() => {
      setCounter(c => c + 1)
    }, 1000)
  }, [])

  return <div>About {counter}</div>
}
