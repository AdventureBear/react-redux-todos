import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from './actionCreators'

const initialState = {
  todos: [],
  id: 0
}

export default function rootReducer(state=initialState, action){

  switch (action.type) {
    case ADD_TODO:
      var newState = {...state}
      newState.id++
      return {
        ...newState,
        todos: [...newState.todos, {task: action.task, id: newState.id}]
      }
    case REMOVE_TODO:
      var newState = {...state}
      var todos = newState.todos.filter(val => val.id !== action.id )
      return {
        ...newState, todos
      }

    case UPDATE_TODO:
      debugger
      var newState = {...state}
      var todos = newState.todos.map(todo => {
          if (todo.id === action.id) { todo.task = action.task }
          return todo
      })
      return {
        ...newState, todos
      }

    default:
      return state
  }
}