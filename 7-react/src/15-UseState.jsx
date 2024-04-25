import React, { useState } from 'react'

// Bad Practice
// export default function Counter () {
//   const [object, setObject] = useState(() => ({
//     count: 10,
//     state: (9999999n ** 999999n).toString().length
//   }))

//   return (
//     <div>
//       State: {object.state}
//       <hr />
//       Value: {object.count}
//       <button onClick={() => setObject({ ...object, count: object.count + 1 })}>
//         +
//       </button>
//     </div>
//   )
// }

export default function Counter () {
  const [count, setCount] = useState(10)
  const [state, setState] = useState(
    () => (9999999n ** 999999n).toString().length
  )

  return (
    <div>
      State: {state}
      <button onClick={() => setState(20)}>set state</button>
      <hr />
      Value: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// export default function Counter () {
//   const state = useState(10)

//   //   console.log(state)

//   return (
//     <div>
//       Value: {state[0]}
//       <button onClick={() => state[1](state[0] + 1)}>+</button>
//     </div>
//   )
// }

// function useAli (defaultValue) {
//   let value
//   if (typeof defaultValue === 'function') {
//     value = defaultValue()
//   } else {
//     value = defaultValue
//   }

//   function setValue (newValue) {
//     value = newValue
//   }

//   return [value, setValue]
//   return { value, setValue }
// }

// // const { value: count, setValue: setCount } = useAli(10)
// const [count, setCount] = useAli(10)

// console.log(count)
