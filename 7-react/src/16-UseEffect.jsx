import React, { useEffect, useState } from 'react'

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(true)}>Load Heavy Data</button>
      <button onClick={() => setMount(false)}>Profile</button>
      {mount && <MyComponent />}
    </div>
  )
}

function MyComponent () {
  const [count, setCount] = useState(1)
  const [users, setUsers] = useState([])
  const [state, setState] = useState(1)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(state + 1)
    }, 4000)

    console.log('Effect', state, timeoutId)

    return () => {
      console.log('CleanUp', state, timeoutId)
      clearTimeout(timeoutId)
    }
  }, [state])

  // cDM
  useEffect(() => {
    console.log('Mount')
  }, [])

  // cDM, cDU
  useEffect(() => {
    console.log('Update')
  }, [count])

  // cWU
  useEffect(() => {
    return () => {
      console.log('Unmount')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://jsonplaceholder.typicode.com/users', {
      signal: controller.signal
    })
      .then(response => response.json())
      .then(data => setUsers(data))

    return () => {
      console.log('cancel request')
      controller.abort()
    }
  }, [])

  return (
    <div>
      State: {state}
      <hr />
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <hr />
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
