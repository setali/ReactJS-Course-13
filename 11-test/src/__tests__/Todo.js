import { fireEvent, render, screen } from '@testing-library/react'
import Todo from '../Todo'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('Todos', () => {
  test('Add todo', () => {
    render(<Todo />)

    const firstTodo = 'First Todo'

    const input = screen.getByPlaceholderText('Task')
    const button = screen.getByText(/add todo/i)

    fireEvent.change(input, { target: { value: firstTodo } })
    fireEvent.click(button)

    screen.getByText(firstTodo)
  })

  test('Add todo by user event', async () => {
    render(<Todo />)

    const input = screen.getByPlaceholderText('Task')
    const button = screen.getByText(/add todo/i)
    const list = screen.getByTestId('todo-list')

    const firstTodo = 'First Todo'

    await act(() => {
      userEvent.type(input, firstTodo)
      userEvent.click(button)
    })

    screen.getByText(firstTodo)
    expect(list.childElementCount).toBe(1)

    const secondTodo = 'Second Todo'

    await act(() => {
      userEvent.type(input, secondTodo)
      userEvent.click(button)
    })

    screen.getByText(secondTodo)
    expect(list.childElementCount).toBe(2)

    await act(() => {
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
    })

    expect(list.childElementCount).toBe(2)
  })
})
