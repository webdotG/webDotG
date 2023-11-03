import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {

    addToDo(state, action) {
      console.log("STATE  : ", state)
      console.log("ACTION  : ", action)
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },

    toggleToDoCompleted(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
      toggledTodo.completed = !toggledTodo.completed
    }

  },
})

export const { addToDo, removeTodo, toggleToDoCompleted } = todoSlice.actions

export default todoSlice.reducer