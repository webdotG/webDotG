import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (_, {rejectWithValue}) {
    try {
    
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=9')
      console.log('RESPONSE CREATEASYNC FETCH TODOS  : ', response)
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

export const fetchDeleteTodo = createAsyncThunk(
  'todos/fetchDeleteTodo',
  async function(id, {rejectWithValue, dispatch}) {
    try {

      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      })
      console.log('FETCH DELETE TODO RESPONSE : ', response)
      if (!response.ok) {
        throw new Error('не могу удалить задачу')
      }
      dispatch(removeTodo({id}))

    } catch (error) {
      return rejectWithValue(error.message)
    }

  }
)

export const fetchToggleStatusTodo = createAsyncThunk(
  'todos/fetchToggleStatusTodo',
  async function (id, {rejectWithValue, dispatch, getState}) {
    const todo = getState().todos.todosList.find( todo => todo.id === id)

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Conent-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: !todo.completed
        })
      })
      if (!response.ok) {
        throw new Error('не могу поменять статус задачи')
      }
      const data = await response.json()
      console.log(data)
      dispatch(toggleToDoCompleted({id})) 

    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchAddNewTodo = createAsyncThunk(
  'todos/fetchAddNewTodo',
  async function (text, {rejectWithValue, dispatch}) {

    try {
      const todo = {
        title: text,
        userId: 1,
        completed: false,
      }

      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(todo)
      })
      if (!response.ok) {
        throw new Error('не могу создать задачу')
      }

      const data = await response.json()
      console.log(data)
      dispatch(addToDo(data))

    } catch (error) {
      return rejectWithValue(error.message)
    }
    
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosList: [],
    status: '',
    error: '',
  },
  reducers: {

    addToDo(state, action) {
      state.todosList.push(action.payload)
      // state.todosList.push({
      //   id: new Date().toISOString(),
      //   text: action.payload.text,
      //   completed: false,
      // })
    },

    removeTodo(state, action) {
      state.todosList = state.todosList.filter(todo => todo.id !== action.payload.id)
    },

    toggleToDoCompleted(state, action) {
      const toggledTodo = state.todosList.find(todo => todo.id === action.payload.id)
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
    state.todosList = action.payload
  },
  [fetchTodos.rejected]: (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
  },
  [fetchDeleteTodo.rejected] : (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
  },

  }
})

export const { addToDo, removeTodo, toggleToDoCompleted } = todoSlice.actions

export default todoSlice.reducer