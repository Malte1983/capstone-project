import { render, screen } from '@testing-library/react'
import TodoCard from './ToDoCard'

describe('TaskList', () => {
  const todo = 'wash the car'

  it('display the Text wash the Car', () => {
    render(<TodoCard todo={todo} />)
    const text = screen.getByText('wash the car')
    expect(text).toBeInTheDocument()
  })
})
