import { useState } from 'react'
import styled from 'styled-components/macro'

function InputTask({ onCreateNewTasks }) {
  const [value, setValue] = useState('')
  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <InputForm onSubmit={event => handleSubmit(event)}>
      <Label>add</Label>
      <InputNewTask
        type="text"
        placeholder="Neue Aufgabe hinzufügen..."
        name="todo"
        required
        autoComplete="Off"
        value={value}
        onChange={handleChange}
      />
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
    form.reset()
    todo.focus()
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
  font-size: 18px;
  text-align: center;
  font-family: 'Lato', sans-serif;
`

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
const Button = styled.button`
  border: none;
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  border-radius: 15px;
  padding: 5px 10px 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`
const Label = styled.label`
  display: none;
`
