import React, { useState } from 'react'
import ToDoCard from './components/Tasklist/ToDoCard'
import Header from './components/Header/Header'
import styled from 'styled-components/macro'
import InputTask from './components/Forms/InputTask'
import { v4 as uuidv4 } from 'uuid'
import SortableList from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import DiaryForm from './components/Forms/DiaryForm'
import Mood from './components/Mood/Mood'
import Dashboard from './components/Dashboard/Dashboard'
import DiaryEntry from './components/Diary/DiaryEntry'

const exampleDataTasks = [
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

const exampleDataDiarys = [
  {
    id: 4,
    headline: 'Toller Tag',
    date: '19.10.2021',
    text: ' Dies ist mein erster Tagebucheintrag',
  },
]

function App() {
  const [tasks, setTasks] = useState(() => {
    if (localStorage.getItem('tasksLocalStorage')) {
      return JSON.parse(localStorage.getItem('tasksLocalStorage'))
    } else {
      return exampleDataTasks
    }
  })

  const [diarys, setDiarys] = useState(() => {
    if (localStorage.getItem('diaryLocalStorage')) {
      return JSON.parse(localStorage.getItem('diaryLocalStorage'))
    } else {
      return exampleDataDiarys
    }
  })

  const uncompletedTasks = tasks.filter(task => !task.completed)

  const tasksNoun = tasks.length !== 1 ? '' : 'task'
  const remainingTasks = `${uncompletedTasks.length} ${tasksNoun} `

  return (
    <Main>
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
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
          </Route>

          <Route path="/DiaryForm">
            <div>
              <DiaryForm onHandleCreateDiarys={handleCreateDiarys} />
              {diarys.map(diary => (
                <DiaryEntry
                  handleDeleteDiary={handleDeleteDiary}
                  headline={diary.headline}
                  date={diary.date}
                  text={diary.text}
                  key={diary.id}
                  id={diary.id}
                />
              ))}
            </div>
          </Route>

          <Route path="/Mood">
            <Mood />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </Main>
  )

  function handleSortEnd(oldIndex, newIndex) {
    const newTasks = arrayMoveImmutable(tasks, oldIndex, newIndex)
    setTasks(newTasks)
    localStorage.setItem('tasksLocalStorage', JSON.stringify(newTasks))
  }

  function handleCreateDiarys({ text, headline, date }) {
    const newDiarys = [
      {
        id: uuidv4(),
        headline: headline,
        date: date,
        text: text,
      },
      ...diarys,
    ]

    setDiarys(newDiarys)
    localStorage.setItem('diaryLocalStorage', JSON.stringify(newDiarys))
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

  function handleDeleteDiary(id) {
    const filteredData = diarys.filter(diary => diary.id !== id)
    const stringifiedValue = JSON.stringify(filteredData)
    localStorage.setItem('diaryLocalStorage', stringifiedValue)
    setDiarys(filteredData)
  }
}

export default App

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-bottom: 125px;
`
const TaskHeadLine = styled.h2`
  text-decoration: underline;
  font-size: 25px;
  margin-top: 30px;
  margin-left: 15px;
  font-weight: 600;
`
const RemainingTasks = styled.span`
  margin-left: 5%;
  align-self: flex-start;
  color: red;
  font-size: 20px;
  font-weight: bold;
  margin-top: -25px;
  &::after {
    font-size: 18px;
    color: black;
    content: 'Aufgaben';
    font-weight: normal;
  }
`
const Wrapper = styled.div`
  /* display: grid;
  grid-template-rows: 100px 1fr 100px;
  height: 100vh;
  margin: 0 auto;
  max-width: 500px;
  overflow-wrap: normal; */
`
