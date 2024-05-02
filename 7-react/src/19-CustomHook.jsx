import React, { useState } from 'react'

function useField () {
  const [value, setValue] = useState('')

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

export default function CustomHook () {
  const username = useField()
  const password = useField()

  return (
    <div>
      <form>
        <input type='text' name='username' {...username} />
        <input type='text' name='password' {...password} />
      </form>
    </div>
  )
}
