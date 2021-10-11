import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('TaskList', () => {
  const titleDescriptiom = 'Meine Aufgaben'

  it('display the Text wash the Car', () => {
    render(<Header title={titleDescriptiom} />)
    const text = screen.getByText('Meine Aufgaben')
    expect(text).toBeInTheDocument()
  })
})
