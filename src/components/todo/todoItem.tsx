
import style from './todo.module.scss'

function ToDoItem({ id, text, completed }){

  return (
    <li className={style.todo_item}
      key={id}>
      <input type='checkbox'
        checked={completed}
        onChange={() => toggleTodoCompleted(id)} />
      <span>        {text}</span>
      <span onClick={() => removeToDo(id)}>             удалить</span>
    </li>)
  )
}

export default ToDoItem