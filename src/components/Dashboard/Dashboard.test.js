import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  const task = 'Mental-Buddy'

  it('display Aufgaben Insgesamt:davon...', () => {
    render(<Dashboard task={task} />)
    const text = screen.getByText('Aufgaben Insgesamt:davon...')
    expect(text).toBeInTheDocument()
  })
})
