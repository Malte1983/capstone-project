import React, { useState } from 'react'
import ToDoCard from './components/Tasklist/ToDoCard'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'
import InputTask from './components/Forms/InputTask'
import { v4 as uuidv4 } from 'uuid'

const ExampleData = [
  {
    id: 1,
    todo: 'wash the Car',
  },
  {
    id: 2,
    todo: 'have a brake',
  },

  {
    id: 3,
    todo: 'meeting with Coaches',
  },
]

function App() {
  const [tasks, setTasks] = useState(ExampleData)

  return (
    <Main>
      <Header />
      <InputTask onCreateNewTasks={handleCreateTasks} />
      <TaskHeadLine>Zu Erledigen</TaskHeadLine>
      {tasks.map(ExampleData => (
        <ToDoCard
          todo={ExampleData.todo}
          id={ExampleData.id}
          key={ExampleData.id}
        />
      ))}
    </Main>
  )
  function handleCreateTasks({ todo, id }) {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        todo: todo,
      },
    ]
    setTasks(newTask)
  }
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
`
const TaskHeadLine = styled.h2`
  font-family: 'Lato', sans-serif;
  text-decoration: underline;
  font-size: 25px;
  margin-top: 30px;
  margin-left: 15px;
  font-weight: 600;
`
