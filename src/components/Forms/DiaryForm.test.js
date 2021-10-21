import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DiaryForm from './DiaryForm'

describe('DiaryForm', () => {
  it('render input-field', () => {
    render(<DiaryForm />)
    const inputField = screen.getByPlaceholderText('Deine Überschrift')
    expect(inputField).toBeInTheDocument()
  })

  it('form works: text written input fields will be sent to onHandleCreateDiarys', () => {
    const mockDiaryInput = jest.fn()
    render(<DiaryForm onHandleCreateDiarys={mockDiaryInput} />)

    const diaryInput = screen.getByPlaceholderText(
      'Hier startet dein Positiv-Tagebuch'
    )
    userEvent.type(diaryInput, 'new diary')

    const button = screen.getByRole('button')
    userEvent.click(button)

    const currentDate = screen.getByLabelText('Datum')
    expect(currentDate).toBeInTheDocument()

    const today = new Date(),
      todayString =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate()

    expect(mockDiaryInput).toHaveBeenCalledWith({
      text: 'new diary',
      date: todayString,
      headline: '',
    })
  })
})
