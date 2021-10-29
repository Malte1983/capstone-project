import { render, screen } from '@testing-library/react'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  const mockTasks = [
    {
      id: 1,
      todo: 'essen',
      completed: false,
    },
  ]

  const mockDiaries = [
    {
      id: 4,
      headline: 'Toller Tag',
      date: '19.10.2021',
      stimmung: 'sehr gut',
      text: 'Dies ist mein erster Tagebucheintrag',
    },
  ]
  it('display Aufgaben Insgesamt:davon...', () => {
    render(<Dashboard tasks={mockTasks} diaries={mockDiaries} id={4} />)

    const text = screen.getByText('Aufgaben Insgesamt: davon...')
    expect(text).toBeInTheDocument()
    const textTwo = screen.getByText('erledigte Aufgabe')
    expect(textTwo).toBeInTheDocument()
    const textThree = screen.getByText('Tagebucheintrag vorhanden')
    expect(textThree).toBeInTheDocument()
  })
})
