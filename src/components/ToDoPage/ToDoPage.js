import { arrayMoveImmutable } from 'array-move'
import SortableList from 'react-easy-sort'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import InputTask from '../Forms/InputTask'
import ToDoCard from './ToDoCard'
import saveToLocal from '../../lib/saveToLocal'
import loadFromLocal from '../../lib/loadFromLocal'

export default function ToDoPage({ tasks, onSetTasks }) {
  const uncompletedTasks = tasks.filter(task => !task.completed)
  const tasksNoun = tasks.length !== 1 ? '' : ''
  const remainingTasks = `${uncompletedTasks.length} ${tasksNoun} `

  return (
    <>
      <InputTask onCreateNewTasks={handleCreateTasks} />
      <TaskHeadLine>Zu Erledigen</TaskHeadLine>
      <Wrapper>
        <RemainingTasks>{remainingTasks}</RemainingTasks>
        <div>{remainingTasks <= 1 ? 'Aufgabe' : 'Aufgaben'}</div>
      </Wrapper>
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
            onChecked={handleCheckbox}
            onDeleteTask={handleDeleteTask}
            onUpdateTask={handleUpdateTask}
          />
        ))}
      </SortableList>
    </>
  )

  function handleUpdateTask(id, value) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, todo: value }
      }
      return task
    })

    onSetTasks(newTasks)
    saveToLocal('tasksLocalStorage', newTasks)
  }
  function handleDeleteTask(id) {
    const taskToDelete = tasks.filter(task => task.id === id)
    const filteredData = tasks.filter(task => task.id !== id)
    saveToLocal('tasksLocalStorage', filteredData)
    if (taskToDelete[0].completed) {
      const countDeletedTasks = loadFromLocal('deletedTasks')
      const newCountDeletedTask = countDeletedTasks + 1
      saveToLocal('deletedTasks', newCountDeletedTask)
    }

    onSetTasks(filteredData)
  }

  function handleCheckbox(id) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    onSetTasks(
      newTasks.sort((a, b) =>
        a.completed === b.completed ? 0 : a.completed ? 1 : -1
      )
    )
    saveToLocal('tasksLocalStorage', newTasks)
  }

  function handleSortEnd(oldIndex, newIndex) {
    const newTasks = arrayMoveImmutable(tasks, oldIndex, newIndex)
    onSetTasks(newTasks)
    saveToLocal('tasksLocalStorage', newTasks)
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

    onSetTasks(newTasks)
    saveToLocal('tasksLocalStorage', newTasks)
  }
}

const TaskHeadLine = styled.h2`
  text-decoration: underline;
  font-size: 25px;
  margin-top: 30px;
  margin-left: 5%;
  font-weight: 600;
  padding-left: 3px;
`
const RemainingTasks = styled.span`
  margin-left: 5%;
  padding-left: 3px;
  color: red;
  font-size: 20px;
  font-weight: bold;
`
const Wrapper = styled.div`
  display: flex;
  font-size: 20px;
  gap: 5px;
`
