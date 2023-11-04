import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, {rejectWithValue}) {
    try {
    
      const response = await fetch('https://jsonplaceholder.typicode.com/ttodos?_limit=9')
      console.log('RESPONSE CREATEASYNC FETCHTODOS  : ', response)
      if (!response.ok) {
        throw new Error('server error')
      }
      const data = await response.json()
      return data
     
    } catch (error){
      return rejectWithValue(error.message)
    }
  }
     
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: '',
    error: '',
  },
  reducers: {

    addToDo(state, action) {
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

  extraReducers: {
  [fetchTodos.pending]: (state) => {
    state.status = 'loading'
    state.error = ''
  },
  [fetchTodos.fulfilled]: (state, action) => {
    state.status = 'resolved'
    state.todos = action.payload
  },
  [fetchTodos.rejected]: (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
  },

  }
})

export const { addToDo, removeTodo, toggleToDoCompleted } = todoSlice.actions

export default todoSlice.reducer