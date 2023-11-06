
import style from './todo.module.scss'

interface typeNewTodoProps {
  text: string,
  handleInput: (str: string) => void,
  handleSubmit: () => void,
}

const ToDoInpuField: React.FC<typeNewTodoProps> = ({text, handleSubmit, handleInput}) => {

  return (
    <label className={style.todo_label}>
      <input className={style.todo_label_input} value={text}
       onChange={(e) => handleInput(e.target.value)}></input>
      <button onClick={handleSubmit}>добавить</button>
    </label>
  )
}

export default ToDoInpuField