import { useState } from 'react'

export default function Todo () {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function addTodo (e) {
    e.preventDefault()

    if (!task) return

    setTodos(todos => [...todos, task])
    setTask('')
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type='text'
          placeholder='Task'
          value={task}
          onChange={e => setTask(e.target.value)}
        ></input>
        <button type='submit'>Add todo</button>
      </form>
      <ol data-testid='todo-list'>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
    </div>
  )
}
