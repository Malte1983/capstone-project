import { arrayMoveImmutable } from 'array-move'
import SortableList from 'react-easy-sort'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import InputTask from '../Forms/InputTask'
import ToDoCard from './ToDoCard'

export default function ToDoPage({ tasks, setTasks }) {
  const uncompletedTasks = tasks.filter(task => !task.completed)
  const tasksNoun = tasks.length !== 1 ? '' : 'task'
  const remainingTasks = `${uncompletedTasks.length} ${tasksNoun} `

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

  return (
    <>
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
            onChecked={handleCheckbox}
            onDeleteTask={handleDeleteTask}
            onUpdateTask={handleUpdateTask}
          />
        ))}
      </SortableList>
    </>
  )
}

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
