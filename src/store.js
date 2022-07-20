import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import { save } from 'redux-localstorage-simple'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import todosReducer from './reducers/TodosReducer'
import filtersReducer from './reducers/TodosFilterReducer'

const reducer = combineReducers({
  todos: todosReducer,
  filter: filtersReducer,
})

const todosFromStorage = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : []
const initialState = { todos: todosFromStorage }
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
  //   composeWithDevTools(applyMiddleware(save({ namespace: 'todo-list' })))
)

export default store
