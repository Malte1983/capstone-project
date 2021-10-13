import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputTask from './InputTask'

describe('InputTask', () => {
  it('render input-field', () => {
    render(<InputTask />)
    const inputField = screen.getByPlaceholderText('Neue Aufgabe hinzufügen...')
    expect(inputField).toBeInTheDocument()
  })

  it('form works: text written input fields will be sent to onCreateNewTasks', () => {
    const mockTaskInput = jest.fn()
    render(<InputTask onCreateNewTasks={mockTaskInput} />)

    const taskInput = screen.getByLabelText('add')
    userEvent.type(taskInput, 'new task')

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(mockTaskInput).toHaveBeenCalledWith({
      todo: 'new task',
    })
  })
})
