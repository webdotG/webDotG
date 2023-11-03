import { useState } from 'react'
import {useDispatch} from 'react-redux'
import ToDoList from './todoList'
import style from './todo.module.scss'
import ToDoInpuField from './todoInputField'
import { addToDo } from '../../../store/todoSlice'

// export type typeToDo = {
//   id: number | string | never,
//   text: string | never,
//   completed: boolean | never
// }

function Todo() {
  const dispatch = useDispatch()
  
  const [text, setText] = useState('')

  const addTask = () => {
    dispatch(addToDo({text}))
    setText('')
  } 

  return (
    <div className={style.todo_wrapper}>
      <h1 className={style.todo_title}>todo list</h1>
      <ToDoInpuField text={text} handleInput={setText} handleSubmit={addTask} />
      <ToDoList />
    </div>
  )
}

export default Todo