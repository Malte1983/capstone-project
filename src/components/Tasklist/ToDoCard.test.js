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
    const mockCheckbox = jest.fn()
    render(
      <SortableList>
        <ToDoCard todo={todo} onHandleIsChecked={mockCheckbox} />
      </SortableList>
    )
    const grabImage = screen.getByAltText('ziehen')
    userEvent.click(grabImage)

    const ButtonEdit = screen.getByAltText('bearbeiten')
    userEvent.click(ButtonEdit)

    const Checkbox = screen.getByRole('checkbox')
    userEvent.click(Checkbox)
    expect(mockCheckbox).toHaveBeenCalled()
  })
})
