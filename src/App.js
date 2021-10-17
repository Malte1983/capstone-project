import React, { useState } from 'react'
import ToDoCard from './components/Tasklist/ToDoCard'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'
import InputTask from './components/Forms/InputTask'
import { v4 as uuidv4 } from 'uuid'
import SortableList from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move'

const exampleData = [
  {
    id: 1,
    todo: '<-- gedrückt halten und ziehen zum sortieren',
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

  const uncompletedTasks = tasks.filter(task => !task.completed)

  const tasksNoun = tasks.length !== 1 ? '' : 'task'
  const remainingTasks = `${uncompletedTasks.length} ${tasksNoun} `

  return (
    <Main>
      <Header />
      <InputTask onCreateNewTasks={handleCreateTasks} />
      <TaskHeadLine>Zu Erledigen</TaskHeadLine>
      <RemainingTasks>{remainingTasks}</RemainingTasks>
      <SortableList
        onSortEnd={handleSortEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {tasks.map(task => (
          <ToDoCard
            todo={task.todo}
            id={task.id}
            key={task.id}
            completed={task.completed}
            onHandleIsChecked={handleCheckbox}
            onHandleDeleteTask={handleDeleteTask}
            onHandleUpdateTask={handleUpdateTask}
          />
        ))}
      </SortableList>
    </Main>
  )

  function handleSortEnd(oldIndex, newIndex) {
    const newTasks = arrayMoveImmutable(tasks, oldIndex, newIndex)
    setTasks(newTasks)
    localStorage.setItem('tasksLocalStorage', JSON.stringify(newTasks))
  }

  function handleCreateTasks({ todo }) {
    const newTasks = [
      {
        id: uuidv4(),
        todo: todo,
        completed: false,
      },
      ...tasks,
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

    setTasks(
      newTasks.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      )
    )
    localStorage.setItem('tasksLocalStorage', JSON.stringify(newTasks))
  }

  function handleUpdateTask(id, value) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, todo: value }
      }
      return task
    })

    setTasks(newTasks)
    localStorage.setItem('tasksLocalStorage', JSON.stringify(newTasks))
  }

  function handleDeleteTask(id) {
    const filteredData = tasks.filter(task => task.id !== id)
    const stringifiedValue = JSON.stringify(filteredData)
    localStorage.setItem('tasksLocalStorage', stringifiedValue)
    setTasks(filteredData)
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
const RemainingTasks = styled.span`
  font-family: 'Lato', sans-serif;
  margin-left: 15px;
  margin-top: 5px;
  align-self: flex-start;
  color: red;
  font-size: 20px;
  &::after {
    font-size: 18px;
    color: black;
    content: 'Aufgaben';
  }
`
