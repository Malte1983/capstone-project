import React from 'react'
import TodoCard from './components/Tasklist/TodoCard'
import data from './components/data.json'
import Header from './components/Header/Header'
import styled from 'styled-components'

function App() {
  return (
    <Main>
      <Header />
      {data.map(data => (
        <TodoCard todo={data.todo} id={data.id} key={data.id} />
      ))}
    </Main>
  )
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
