import React, { useState } from 'react'

export default function TodosUseState () {
  const [todos, setTodos] = useState([])

  const [task, setTask] = useState('')

  function getId () {
    return todos.length ? todos[todos.length - 1].id + 1 : 1
  }

  function handleSubmit (e) {
    e.preventDefault()
    setTodos(todos => [...todos, { title: task, id: getId() }])
    setTask('')
  }

  function remove (id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={task} onChange={e => setTask(e.target.value)} />
        <button type='submit'>Add task</button>
      </form>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
            <span
              onClick={() => remove(todo.id)}
              style={{ color: 'red', margin: '10px' }}
            >
              x
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
