import React from 'react'
import ToDoCard from './components/Tasklist/ToDoCard'
import data from './components/data.json'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'
import InputTask from './components/Forms/InputTask'

function App() {
  return (
    <Main>
      <Header />
      <InputTask />
      <TaskSpan>Meine Aufgaben</TaskSpan>
      {data.map(data => (
        <ToDoCard todo={data.todo} key={data.id} />
      ))}
    </Main>
  )
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
const TaskSpan = styled.span`
  font-family: 'Lato', sans-serif;
  text-decoration: underline;
  font-size: 25px;
  margin-top: 30px;
  margin-left: 15px;
`
