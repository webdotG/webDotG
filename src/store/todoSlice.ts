import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from '@reduxjs/toolkit'

type typeTodo = {
  id: string,
  title: string,
  completed: boolean,
}

type typeStateTodo = {
  list: typeTodo[],
  loading: boolean,
  error: string | null,
}


export const fetchTodos = createAsyncThunk<typeTodo[], undefined, { rejectValue: string }>(
  'todos/fetchTodos',
  async function (_, { rejectWithValue }) {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
    console.log('RESPONSE CREATEASYNC FETCH TODOS  : ', response)
    if (!response.ok) {
      return rejectWithValue('ошибка на сервере')
    }
    const data = await response.json()
    return data
  }
)

export const fetchDeleteTodo = createAsyncThunk<string, string, { rejectValue: string }>(
  'todos/fetchDeleteTodo',
  async function (id, { rejectWithValue }) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
    console.log('FETCH DELETE TODO RESPONSE : ', response)
    if (!response.ok) {
      return rejectWithValue('не могу удалить задачу')
    }
    return id

  }
)

export const fetchToggleStatusTodo = createAsyncThunk<typeTodo, string, { rejectValue: string, state: { todos: typeStateTodo } }>(
  'todos/fetchToggleStatusTodo',
  async function (id, { rejectWithValue, getState }) {
    const todo = getState().todos.list.find(todo => todo.id === id)

    if (todo) {
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
        return rejectWithValue('не могу поменять статус задачи')
      }
      return (await response.json()) as typeTodo
    }

    else {
      return rejectWithValue('не могу найти захадчу в листе')
    }
  }
)

export const fetchAddNewTodo = createAsyncThunk<typeTodo, string, { rejectValue: string }>(
  'todos/fetchAddNewTodo',
  async function (text, { rejectWithValue }) {

    const todo = {
      title: text,
      userId: 1,
      completed: false,
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    if (!response.ok) {
      return rejectWithValue('не могу создать задачу')
    }

    return (await response.json()) as typeTodo

  }
)

const initialState: typeStateTodo = {
  list: [],
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
      .addCase(fetchAddNewTodo.pending, (state) => {
        state.error = null
      })
      .addCase(fetchAddNewTodo.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(fetchToggleStatusTodo.fulfilled, (state, action) => {
        const toggledTodo = state.list.find(todo => todo.id === action.payload.id)
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed
        }
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload)
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload
        state.loading = false
      })

    // [fetchTodos.fulfilled]: (state, action) => {
    //   state.status = 'resolved'
    //   state.todosList = action.payload
    // },
    // [fetchTodos.rejected]: (state, action) => {
    //   state.status = 'rejected'
    //   state.error = action.payload
    // },
    // [fetchDeleteTodo.rejected] : (state, action) => {
    //   state.status = 'rejected'
    //   state.error = action.payload
    // },

  }
})

// export const { addToDo, removeTodo, toggleToDoCompleted } = todoSlice.actions

export default todoSlice.reducer

function isError(action: AnyAction) {
  return action.type.endsWith('rejected')
}



// addToDo(state, action: PayloadAction) {
//   state.todosList.push(action.payload)
//   // state.todosList.push({
//   //   id: new Date().toISOString(),
//   //   text: action.payload.text,
//   //   completed: false,
//   // })
// },

// removeTodo(state, action: PayloadAction) {
//   state.todosList = state.todosList.filter(todo => todo.id !== action.payload.id)
// },

// toggleToDoCompleted(state, action: PayloadAction) {
//   const toggledTodo = state.todosList.find(todo => todo.id === action.payload.id)
//   toggledTodo.completed = !toggledTodo.completed
// }

