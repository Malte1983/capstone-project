import React, { useState } from 'react'
import styled from 'styled-components/macro'
import lines from '../../assets/lines.svg'
import trashIcon from '../../assets/trashIcon.svg'
import edit from '../../assets/edit.svg'
import donegreen from '../../assets/donegreen.svg'
import { SortableItem, SortableKnob } from 'react-easy-sort'

export default function ToDoCard({
  todo,
  completed,
  onHandleIsChecked,
  id,
  onHandleDeleteTask,
  onHandleUpdateTask,
}) {
  const [updateTask, setUpdateTask] = useState(false)
  const [value, setValue] = useState(todo)

  const updateTaskHandler = () => {
    setUpdateTask(!updateTask)
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleClick() {
    onHandleUpdateTask(id, value)
    updateTaskHandler()
  }

  return (
    <SortableItem>
      <MainWrapper>
        <TodoMain>
          <SortableKnob>
            <ButtonGrab>
              <img src={lines} alt="menu" />
            </ButtonGrab>
          </SortableKnob>
          {updateTask ? (
            <Section>
              <label htmlFor="edit" />
              <EditInputField
                onChange={handleChange}
                type="text"
                name="edit"
                value={value}
              ></EditInputField>
              <EditCheckedButton onClick={handleClick}>
                <img src={donegreen} alt="menu" width="25" />
              </EditCheckedButton>
            </Section>
          ) : (
            <TaskList strikeThrough={completed}>{todo}</TaskList>
          )}
          <Checkbox
            type="checkbox"
            checked={completed}
            onChange={() => onHandleIsChecked(id)}
          />
          <ButtonEdit onClick={updateTaskHandler}>
            <img src={edit} alt="menu" width="30" />
          </ButtonEdit>
          <ButtonTrash onClick={() => onHandleDeleteTask(id)}>
            <img src={trashIcon} alt="menu" width="25" />
          </ButtonTrash>
        </TodoMain>
      </MainWrapper>
    </SortableItem>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TodoMain = styled.div`
  display: grid;
  padding: 8px;
  grid-template-columns: 28px 1fr 28px 28px 28px;
  grid-template-rows: 28px;
  background-color: white;
  color: black;
  width: 90%;
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
  cursor: move;
  pointer-events: auto;
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
const EditInputField = styled.input`
  font-size: 15px;
  color: #ff8800;
  margin-left: 5px;
  border: 0.5px solid grey;
  border-radius: 5px;
  width: 20vh;
`
const EditCheckedButton = styled.button`
  background-color: transparent;
  border: none;
  height: 28px;
  margin-left: 10px;
`
const Section = styled.section`
  display: flex;
`
