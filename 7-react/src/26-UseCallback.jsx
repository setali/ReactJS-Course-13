import React, { useEffect, useState, useCallback } from 'react'

export default function UseCallback () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 2000)
  }, [])

  const myInputRef = useCallback(node => {
    console.log(node, count)
    node?.focus()
  }, [])

  const myHeightRef = useCallback(node => {
    node && setHeight(node.getBoundingClientRect().height)
  }, [])

  return (
    <div>
      <h2 ref={myHeightRef}>ReactJS Course</h2>
      Height: {height}
      <div>Count: {count}</div>
      <input ref={myInputRef} />
    </div>
  )
}
