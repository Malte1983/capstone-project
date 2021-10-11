import React from 'react'
import styled from 'styled-components'
import lines from '../../assets/lines.svg'

function Todo({ todo }) {
  return (
    <MainWrapper>
      <TodoMain>
        <TaskCard>
          <img src={lines} width="28" color="white" alt="menu" />
          <TaskList>{todo}</TaskList>
        </TaskCard>
      </TodoMain>
    </MainWrapper>
  )
}

export default Todo

const MainWrapper = styled.header`
  display: flex;
  flex-direction: column;
`

const TodoMain = styled.div`
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: white;
  color: black;
  width: 90%;
  height: auto;
  margin: 15px 15px 0 15px;
`
const TaskCard = styled.section`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-left: 15px;
`
const TaskList = styled.p`
  margin-left: 15px;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
`
