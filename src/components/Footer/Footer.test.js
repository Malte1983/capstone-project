import { render, screen } from '@testing-library/react'
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './Footer'

describe('Footer', () => {
  it('render all NavLinks', () => {
    render(
      <Router>
        <Route>
          <Footer />
        </Route>
      </Router>
    )
    const NavLinks = screen.getAllByRole('link')
    expect(NavLinks).toHaveLength(4)
  })
})
