import ReactDOM from 'react-dom/client'
import Post from './Post'
import { act } from 'react-dom/test-utils'

let container, root

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)

  root = ReactDOM.createRoot(container)
})

afterEach(async () => {
  await act(() => {
    root.unmount()
  })

  container.remove()
  container = null
})

describe('Post', () => {
  test('fetch data', async () => {
    const fakePost = {
      id: 1,
      title: 'Post Title',
      body: 'Post body'
    }

    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(fakePost)
        }
      })
    })

    await act(() => {
      root.render(<Post />)
    })

    expect(container.querySelector('h1').textContent).toBe('Post item')
    expect(container.querySelector('h2').textContent).toBe(fakePost.title)
    expect(container.querySelector('p').textContent).toBe(fakePost.body)

    global.fetch.mockRestore()
  })
})
