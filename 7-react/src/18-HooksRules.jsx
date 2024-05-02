import React, { useEffect, useState } from 'react'

export default function HooksRules () {
  const [count, setCount] = useState(1)

  if (count % 2) {
    const [value, setValue] = useState('a')
  }

  const [ali, setAli] = useState('b')

  useEffect(() => {
    const [state, setState] = useState()
  }, [])

  return <div>HooksRules</div>
}

;[useState, useState, useState, useEffect]
