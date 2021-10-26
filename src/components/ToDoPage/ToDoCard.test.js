import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SortableList from 'react-easy-sort'
import ToDoCard from './ToDoCard'

describe('TaskList', () => {
  const todo = 'eine Pause machen'

  it('display the Text eine Pause machen', () => {
    render(
      <SortableList>
        <ToDoCard todo={todo} />
      </SortableList>
    )
    const text = screen.getByText('eine Pause machen')

    expect(text).toBeInTheDocument()
  })

  it('check all Button Elements to call', () => {
    const mockOnChecked = jest.fn()
    const mockOnDelete = jest.fn()
    const mockId = '123ABC'
    const mockUpdateTask = jest.fn()

    render(
      <SortableList>
        <ToDoCard
          todo={todo}
          onChecked={mockOnChecked}
          onDeleteTask={mockOnDelete}
          id={mockId}
          onUpdateTask={mockUpdateTask}
        />
      </SortableList>
    )

    const ButtonDelete = screen.getByAltText('löschen')
    userEvent.click(ButtonDelete)
    expect(mockOnDelete).toHaveBeenCalled()

    const ButtonEdit = screen.getByAltText('bearbeiten')
    userEvent.click(ButtonEdit)

    const ButtonUpdate = screen.getByAltText('Änderungen übernehmen')
    userEvent.click(ButtonUpdate)
    expect(mockUpdateTask).toHaveBeenCalled()

    const Checkbox = screen.getByRole('checkbox', {
      name: 'als erledigt markieren',
    })
    userEvent.click(Checkbox)
    expect(mockOnChecked).toHaveBeenCalled()
  })
})
