import React from 'react'
import ToDoCard from './components/Tasklist/ToDoCard'
import data from './components/data.json'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'

function App() {
  return (
    <Main>
      <Header />
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
