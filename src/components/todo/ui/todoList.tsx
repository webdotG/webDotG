import { useAppSelector } from "../../../store/hook"
import ToDoItem from "./todoItem"

import style from './todo.module.scss'

function ToDoList() {
  const todosList = useAppSelector(state => state.todos.list)

  return (
    <ul className={style.todo_list}>
      {
        todosList.map(todo =>
          <ToDoItem
            key={todo.id}
            {...todo} />)
      }
    </ul>
  )
}

export default ToDoList