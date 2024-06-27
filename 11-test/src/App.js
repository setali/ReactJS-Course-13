import Counter from './Counter'
import Post from './Post'
import Todo from './Todo'

function App () {
  return (
    <div className='App'>
      <Post />
      <hr />
      <Todo />
      <hr />
      <Counter />

      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
