import React, { useState } from 'react'
import styled from 'styled-components/macro'
import lines from '../../assets/lines.svg'
import trashIcon from '../../assets/trashIcon.svg'
import edit from '../../assets/edit.svg'
import doneGreen from '../../assets/doneGreen.svg'
import { SortableItem } from 'react-easy-sort'

export default function ToDoCard({
  todo,
  completed,
  onChecked,
  id,
  onDeleteTask,
  onUpdateTask,
}) {
  const [editingMode, setEditingMode] = useState(false)
  const [value, setValue] = useState(todo)

  const handleActivateEditButton = () => {
    setEditingMode(true)
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleSaveChangeClick() {
    onUpdateTask(id, value)
    setEditingMode(false)
  }

  return (
    <SortableItem>
      <MainWrapper>
        <TodoMain>
          <ButtonGrab draggable={false} aria-label="Element ziehen">
            <Image src={lines} alt="ziehen" draggable={false} />
          </ButtonGrab>

          {editingMode ? (
            <Section>
              <label htmlFor="edit" />
              <EditInputField
                onChange={handleChange}
                type="text"
                name="edit"
                value={value}
                id="edit"
              />
              <EditCheckedButton
                onClick={handleSaveChangeClick}
                aria-label="Änderungen übernehmen"
              >
                <Image src={doneGreen} alt="Änderungen übernehmen" width="25" />
              </EditCheckedButton>
            </Section>
          ) : (
            <TodoStrike strikeThrough={completed}>{todo}</TodoStrike>
          )}

          <Checkbox
            type="checkbox"
            checked={completed}
            onChange={() => onChecked(id)}
            aria-label="als erledigt markieren"
          />

          <ButtonEdit
            onClick={handleActivateEditButton}
            aria-label="Eintrag bearbeiten"
          >
            <Image src={edit} alt="bearbeiten" width="30" />
          </ButtonEdit>
          <ButtonTrash
            onClick={() => onDeleteTask(id)}
            aria-label="Eintrag löschen"
          >
            <Image src={trashIcon} alt="löschen" width="25" />
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
  padding: 10px;
  grid-template-columns: 28px 1fr 28px 28px 28px;
  grid-template-rows: 28px;
  background-color: white;
  color: black;
  width: 90%;
  margin: 15px 15px 0 5%;
  align-items: center;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  line-height: 1.2;
`
const TodoStrike = styled.p`
  margin-left: 15px;
  font-size: 16px;
  text-decoration: ${({ strikeThrough }) =>
    strikeThrough ? 'line-through' : 'none'};
  text-decoration-thickness: 3px;
  text-decoration-color: #ff8800;
  padding-top: 15px;
  word-break: break-all;
`
const ButtonGrab = styled.button`
  height: 28px;
  border: none;
  background-color: transparent;
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
  margin-left: 5%;
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
const Image = styled.img`
  -webkit-touch-callout: none; /* prevent 3D-Touch/Force-Touch */
`
