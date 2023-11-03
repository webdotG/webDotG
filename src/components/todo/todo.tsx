import { useState } from 'react'
import ToDoList from './todoList'
import style from './todo.module.scss'
import ToDoInpuField from './todoInputField'

export type typeToDo = {
  id: number | string | never,
  text: string | never,
  completed: boolean | never
}

function Todo() {

  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }
      ])
      setText('')
    }
  }

  const toggleTodoCompleted = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;
          console.log('TEST>>>> ', todoId)
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  const removeToDo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className={style.todo_wrapper}>
      <h1 className={style.todo_title}>todo list</h1>
      <ToDoInpuField text={text} handleSubmit={setText} hsndleInput={addTodo} />
      <ToDoList todos={todos}  />
    </div>
  )
}

export default Todo