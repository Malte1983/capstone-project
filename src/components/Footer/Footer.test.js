import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Footer from './Footer'

describe('Footer', () => {
  it('renders all NavLinks', () => {
    render(
      <Router>
        <Footer />
      </Router>
    )
    const NavLinks = screen.getAllByRole('link')
    expect(NavLinks).toHaveLength(4)
  })
})
