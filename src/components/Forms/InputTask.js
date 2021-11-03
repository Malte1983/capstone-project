import { useState } from 'react'
import styled from 'styled-components/macro'

function InputTask({ onCreateNewTasks }) {
  const [value, setValue] = useState('')
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <InputForm onSubmit={event => handleSubmit(event)}>
      <Label htmlFor="InputNewTask">add</Label>
      <InputNewTask
        type="text"
        placeholder="Neue Aufgabe hinzufügen..."
        name="todo"
        required
        id="InputNewTask"
        autoComplete="Off"
        value={value}
        onChange={handleChange}
        maxLength="40"
      />
      <Span>max. 40 Zeichen</Span>
      <Button disabled={!value}>Eintragen</Button>
    </InputForm>
  )

  function handleSubmit(eventInside) {
    eventInside.preventDefault()
    const form = eventInside.target
    const { todo } = form.elements

    onCreateNewTasks({
      todo: todo.value,
    })

    setValue('')
  }
}

export default InputTask

const InputNewTask = styled.input`
  width: 250px;
  height: 40px;
  margin-top: 10px;
  border: none;
  box-shadow: inset 0 0 4px 2px rgba(46, 49, 49, 1);
  border-radius: 15px;
  font-size: 17px;
  text-align: center;
  word-break: break-all;
`

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
`
const Button = styled.button`
  border: none;
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  background-color: black;
  color: white;
`
const Label = styled.label`
  visibility: hidden;
`
const Span = styled.span`
  font-size: 12px;
  font-style: italic;
`
