
import style from './todo.module.scss'

function ToDoInpuField({text, handleSubmit, handleInput}) {

  return (
    <label className={style.todo_label}>
      <input className={style.todo_label_input} value={text}
       onChange={(e) => handleInput(e.target.value)}></input>
      <button 
      onClick={handleSubmit}>добавить</button>
    </label>
  )
}

export default ToDoInpuField