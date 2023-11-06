import { useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hook'
import ToDoList from './todoList'
import style from './todo.module.scss'
import ToDoInpuField from './todoInputField'
import { fetchAddNewTodo, fetchTodos } from '../../../store/todoSlice'

function Todo() {
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.todos)

  const [text, setText] = useState('')

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(fetchAddNewTodo(text))
      setText('')
    }
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className={style.todo_wrapper}>
      <h1 className={style.todo_title}>todo list</h1>
      <ToDoInpuField
        text={text}
        handleInput={setText}
        handleSubmit={handleAction} />

      {loading && <h3>загрузка</h3>}
      {error && <h3>ошибка : {error}</h3>}

      <ToDoList />
    </div>
  )
}

export default Todo