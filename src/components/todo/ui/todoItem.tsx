import { useAppDispatch } from '../../../store/hook'
import { fetchDeleteTodo, fetchToggleStatusTodo } from '../../../store/todoSlice'
import style from './todo.module.scss'

type typeTodoItemProps = {
  id: string,
  title: string,
  completed: boolean
}

function ToDoItem({ id, title, completed }: typeTodoItemProps) {
  const dispatch = useAppDispatch()

  return (
    <li className={style.todo_item}
      key={id}>
      <input checked={completed} type='checkbox'
        onChange={() => dispatch(fetchToggleStatusTodo(id))} />
      <h4>{title}</h4>
      <button
        onClick={() => dispatch(fetchDeleteTodo(id))}>             
        удалить</button>
    </li>
  )
}

export default ToDoItem