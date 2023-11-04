import { useSelector } from "react-redux/es/hooks/useSelector"
import ToDoItem from "./todoItem"

import style from './todo.module.scss'

function ToDoList () {
  const todosList = useSelector(state => state.todos.todosList)

  return (
    <ul className={style.todo_list}>
        {
          todosList.map(todo => 
          <ToDoItem key={todo.id} {...todo}/>)
        }
      </ul>
  )
}

export default ToDoList