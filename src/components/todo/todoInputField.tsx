
import style from './todo.module.scss'

function ToDoInpuField({text, handleSubmit, hsndleInput}) {

  return (
    <label className={style.todo_label}>
      <input className={style.todo_label_input} value={text} onChange={(e) => hsndleInput(e.target.value)}></input>
      <button onClick={handleSubmit}>добавить</button>
    </label>
  )
}

export default ToDoInpuField