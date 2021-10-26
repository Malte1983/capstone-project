import React, { useState } from 'react'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Motivation from './components/Motivation/Motivation'
import Dashboard from './components/Dashboard/Dashboard'
import ToDoPage from './components/ToDoPage/ToDoPage'
import DiaryPage from './components/Diary/DiaryPage'

const exampleDataTasks = [
  {
    id: 1,
    todo: '<-- gedrückt halten und ziehen zum sortieren',
    completed: false,
  },
  {
    id: 2,
    todo: 'eine Pause machen',
    completed: false,
  },

  {
    id: 3,
    todo: 'mit den Coaches treffen',
    completed: false,
  },
]

const exampleDataDiarys = [
  {
    id: 4,
    headline: 'Toller Tag',
    date: '19.10.2021',
    stimmung: 'sehr gut',
    text: ' Dies ist mein erster Tagebucheintrag',
  },
]

function App() {
  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem('tasksLocalStorage')) {
      return JSON.parse(localStorage.getItem('tasksLocalStorage'))
    } else {
      return exampleDataTasks
    }
  })

  const [diarys, setDiarys] = useState(() => {
    if (localStorage.getItem('diaryLocalStorage')) {
      return JSON.parse(localStorage.getItem('diaryLocalStorage'))
    } else {
      return exampleDataDiarys
    }
  })

  return (
    <Main>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            <ToDoPage tasks={tasks} setTasks={setTasks} />
          </Route>
          <Route exact path="/DiaryForm">
            <DiaryPage diarys={diarys} setDiarys={setDiarys} />
          </Route>
          <Route exact path="/Motivation">
            <Motivation />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Main>
  )
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 125px;
`

const Wrapper = styled.div``
