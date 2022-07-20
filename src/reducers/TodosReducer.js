import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, CLEAR_ALL } from '../constants'

// import { load } from 'redux-localstorage-simple'

// let TODOS = load({ namespace: 'todo-list' })

// if (!TODOS || !TODOS.tasks || !TODOS.tasks.length) {
//   TODOS = {
//     tasks: [],
//   }
// }

let TODOS = {
  tasks: [],
}
const todosReducer = (state = TODOS.tasks, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case REMOVE_TODO:
      return [...state].filter((todo) => todo.id !== action.payload)
    case CLEAR_ALL:
      return action.payload
    case COMPLETE_TODO:
      return [...state].map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    default:
      return state
  }
}

export default todosReducer
