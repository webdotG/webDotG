import { useSelector } from "react-redux/es/hooks/useSelector"
import ToDoItem from "./todoItem"

import style from './todo.module.scss'

function ToDoList () {
  const todos = useSelector(state => state.todos.todos)

  return (
    <ul className={style.todo_list}>
        {
          todos.map(todo => 
          <ToDoItem key={todo.id} {...todo}/>)
        }
      </ul>
  )
}

export default ToDoList