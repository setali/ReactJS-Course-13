import React, { useReducer, useState } from 'react'

const DEFAULT_STATE = 5

function reducer (state, action = {}) {
  switch (action.type) {
    case 'ADD':
      return state + action.payload

    case 'SUB':
      return state - action.payload

    case 'RESET':
      return DEFAULT_STATE

    default:
      return state
  }
}

export default function UseReducer () {
  const [count, setCount] = useState(1)

  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE)

  const add = payload => ({ type: 'ADD', payload })
  const sub = payload => ({ type: 'SUB', payload })
  const reset = () => ({ type: 'RESET' })

  return (
    <div>
      State: {state}
      <button onClick={() => dispatch(add(1))}>+1</button>
      <button onClick={() => dispatch(add(2))}>+2</button>
      <button onClick={() => dispatch(sub(1))}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch()}>Alaki</button>
      <hr />
      Count: {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}
