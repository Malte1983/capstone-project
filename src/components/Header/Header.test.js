import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  const titleDescription = 'Mental-Buddy'

  it('display the headline Mental-Buddy', () => {
    render(<Header title={titleDescription} />)
    const text = screen.getByText('Mental-Buddy')
    expect(text).toBeInTheDocument()
  })
})
