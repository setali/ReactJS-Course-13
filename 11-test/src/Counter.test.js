import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('Counter test', () => {
  test('render test', () => {
    render(<Counter />)

    screen.getByText(/my counter/i)
    screen.getByText(/Increment/i)

    const value = screen.getByTestId('counter-value').textContent

    expect(value).toBe('0')
  })

  test('action test', async () => {
    render(<Counter />)

    const button = screen.getByText(/increment/i)
    const value = screen.getByTestId('counter-value')

    expect(value.textContent).toBe('0')

    await act(() => {
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
    })

    expect(value.textContent).toBe('4')
  })
})
