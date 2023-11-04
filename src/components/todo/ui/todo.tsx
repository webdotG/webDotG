import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoList from './todoList'
import style from './todo.module.scss'
import ToDoInpuField from './todoInputField'
import { addToDo, fetchTodos } from '../../../store/todoSlice'

// export type typeToDo = {
//   id: number | string | never,
//   text: string | never,
//   completed: boolean | never
// }

function Todo() {
  const dispatch = useDispatch()
  const {status, error} =useSelector(state => state.todos)

  const [text, setText] = useState('')

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addToDo({ text }))
      setText('')
    }
  }

  useEffect( () => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className={style.todo_wrapper}>
      <h1 className={style.todo_title}>todo list</h1>
      <ToDoInpuField text={text} handleInput={setText} handleSubmit={handleAction} />
      
    {status === 'loading' && <h3>загрузка</h3>}
    {error && <h3>ошибка : {error}</h3>}

      <ToDoList />
    </div>
  )
}

export default Todo