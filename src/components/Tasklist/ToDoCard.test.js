import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToDoCard from './ToDoCard'

describe('TaskList', () => {
  const todo = 'wash the car'

  it('display the Text wash the Car', () => {
    render(<ToDoCard todo={todo} />)
    const text = screen.getByText('wash the car')

    expect(text).toBeInTheDocument()
  })

  it('deleteButton function fire on Click', () => {
    const button = screen.getByRole('button')
    userEvent.click(button)
  })
})
