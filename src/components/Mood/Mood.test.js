import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Mood from './Mood'

describe('Mood', () => {
  it('have all six Buttons', () => {
    render(<Mood />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(6)
  })

  it('have one InputField', () => {
    render(<Mood />)
    const inputField = screen.getByLabelText('Anzahl Aufgaben')
    userEvent.type(inputField, '5')
  })
})
