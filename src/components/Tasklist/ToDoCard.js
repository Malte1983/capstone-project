import React from 'react'
import styled from 'styled-components/macro'
import lines from '../../assets/lines.svg'
import trashIcon from '../../assets/trashIcon.svg'
import edit from '../../assets/edit.svg'

export default function ToDoCard({ todo, completed, onHandleCheckbox, id }) {
  return (
    <MainWrapper>
      <TodoMain>
        <ButtonGrab>
          <img src={lines} alt="menu" />
        </ButtonGrab>
        <TaskList strikeThrough={completed}>{todo}</TaskList>
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={() => onHandleCheckbox(id)}
        />
        <ButtonEdit>
          <img src={edit} alt="menu" width="30" />
        </ButtonEdit>
        <ButtonTrash>
          <img src={trashIcon} alt="menu" width="26" />
        </ButtonTrash>
      </TodoMain>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TodoMain = styled.div`
  display: grid;
  padding: 10px;
  grid-template-columns: 28px 1fr 28px 28px 28px;
  grid-template-rows: 28px;
  background-color: white;
  color: black;
  width: 92%;
  margin: 15px 15px 0 15px;
  align-items: center;
`
const TaskList = styled.p`
  margin-left: 15px;
  font-size: 17px;
  font-family: 'Lato', sans-serif;
  text-decoration: ${({ strikeThrough }) =>
    strikeThrough ? 'line-through' : 'none'};
  text-decoration-thickness: 3px;
  text-decoration-color: #ff8800;
`

const ButtonGrab = styled.button`
  height: 28px;
  border: none;
  background-color: transparent;
`
const ButtonTrash = styled.button`
  height: 28px;
  border: none;
  background-color: transparent;
`
const Checkbox = styled.input`
  width: 24px;
  height: 22px;
`

const ButtonEdit = styled.button`
  height: 28px;
  border: none;
  background-color: transparent;
`
