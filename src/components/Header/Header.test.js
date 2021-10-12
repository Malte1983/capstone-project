import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('TaskList', () => {
  const titleDescription = 'Meine Aufgaben'

  it('display the Text Meine Aufgaben', () => {
    render(<Header title={titleDescription} />)
    const text = screen.getByText('Meine Aufgaben')
    expect(text).toBeInTheDocument()
  })
})
