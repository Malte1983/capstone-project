import Footer from './components/Footer/Footer'
import Motivation from './components/Motivation/Motivation'
import Dashboard from './components/Dashboard/Dashboard'
import ToDoPage from './components/ToDoPage/ToDoPage'
import DiaryPage from './components/Diary/DiaryPage'
import Header from './components/Header/Header'
import React, { useState } from 'react'
import loadFromLocal from './lib/loadFromLocal'
import dataTasks from './lib/dataTasks.json'
import dataDiaries from './lib/dataDiaries.json'
import styled from 'styled-components/macro'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [tasks, setTasks] = useState(
    loadFromLocal('tasksLocalStorage') ?? dataTasks
  )

  const [diaries, setDiaries] = useState(
    loadFromLocal('diaryLocalStorage') ?? dataDiaries
  )

  return (
    <Main>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/ToDoPage">
            <ToDoPage tasks={tasks} onSetTasks={handleSetTasks} />
          </Route>
          <Route exact path="/DiaryForm">
            <DiaryPage diaries={diaries} onSetDiaries={handleSetDiaries} />
          </Route>
          <Route exact path="/">
            <Motivation />
          </Route>
          <Route exact path="/Dashboard">
            <Dashboard tasks={tasks} diaries={diaries} />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Main>
  )

  function handleSetTasks(newTasks) {
    setTasks(newTasks)
  }

  function handleSetDiaries(newDiaries) {
    setDiaries(newDiaries)
  }
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 125px;
`

const Wrapper = styled.div``
