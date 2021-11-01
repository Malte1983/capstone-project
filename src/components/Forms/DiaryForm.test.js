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
    render(<DiaryForm onHandleCreateDiaries={mockDiaryInput} />)

    const diaryInput = screen.getByPlaceholderText(
      'Hier startet dein Positiv-Tagebuch'
    )
    userEvent.type(diaryInput, 'new diary')

    const button = screen.getByRole('button', { name: 'Eintrag Speichern' })
    userEvent.click(button)

    const currentDate = screen.getByLabelText('Datum:')
    expect(currentDate).toBeInTheDocument()

    const d = new Date()
    const dateString =
      ('0' + d.getDate()).slice(-2) +
      '.' +
      ('0' + (d.getMonth() + 1)).slice(-2) +
      '.' +
      d.getFullYear()

    expect(mockDiaryInput).toHaveBeenCalledWith({
      text: 'new diary',
      headline: '',
      date: dateString,
      mood: 'sehr gut',
    })
  })
})
