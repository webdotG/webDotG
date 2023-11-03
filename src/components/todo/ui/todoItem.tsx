import { useDispatch } from 'react-redux/es/exports'
import { removeTodo, toggleToDoCompleted } from '../../../store/todoSlice'
import style from './todo.module.scss'

function ToDoItem({ id, text, completed }) {
  const dispatch = useDispatch()

  console.log(toggleToDoCompleted)
  return (
    <li className={style.todo_item}
      key={id}>
      <input checked={completed} type='checkbox'
        onChange={() => dispatch(toggleToDoCompleted({id}))} />
      <h4>{text}</h4>
      <button
        onClick={() => dispatch(removeTodo({id}))}>             удалить</button>
    </li>
  )
}

export default ToDoItem