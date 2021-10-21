import { render, screen } from '@testing-library/react'
import DiaryEntry from './DiaryEntry'

describe('DiaryEntry', () => {
  it('renders the button', () => {
    render(<DiaryEntry />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})
