import React, { useState } from 'react'
import ToDoCard from './components/Tasklist/ToDoCard'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'
import InputTask from './components/Forms/InputTask'
import { v4 as uuidv4 } from 'uuid'

const exampleData = [
  {
    id: 1,
    todo: 'Auto waschen',
    completed: false,
  },
  {
    id: 2,
    todo: 'eine Pause machen',
    completed: false,
  },

  {
    id: 3,
    todo: 'mit den Coaches treffen',
    completed: false,
  },
]

function App() {
  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem('tasksLocalStorage')) {
      return JSON.parse(localStorage.getItem('tasksLocalStorage'))
    } else {
      return exampleData
    }
  })

  return (
    <Main>
      <Header />
      <InputTask onCreateNewTasks={handleCreateTasks} />
      <TaskHeadLine>Zu Erledigen</TaskHeadLine>
      {tasks.map(task => (
        <ToDoCard
          todo={task.todo}
          id={task.id}
          key={task.id}
          completed={task.completed}
          onHandleCheckbox={handleCheckbox}
        />
      ))}
    </Main>
  )
  function handleCreateTasks({ todo }) {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        todo: todo,
        completed: false,
      },
    ]
    setTasks(newTasks)
    localStorage.setItem('tasksLocalStorage', JSON.stringify(newTasks))
  }

  function handleCheckbox(id) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTasks(newTasks)
    localStorage.setItem('tasksLocalStorage', JSON.stringify(newTasks))
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
