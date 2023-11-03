import ToDoItem from "./todoItem"

import style from './todo.module.scss'

function ToDoList ({todos}) {

  return (
    <ul className={style.todo_list}>
        {
          todos.map(todo => <ToDoItem key={todo.id} {...todo}/>)
        }
      </ul>
  )
}

export default ToDoList