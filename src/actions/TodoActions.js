import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  FILTER_TODOS,
  CLEAR_ALL,
} from '../constants'
export const addTodo = (id, text, isCompleted) => (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    payload: {
      id,
      text,
      isCompleted,
    },
  })
  localStorage.setItem('todos', JSON.stringify(getState().todos))
}

export const removeTodo = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_TODO,
    payload: id,
  })
  localStorage.setItem('todos', JSON.stringify(getState().todos))
}
export const clearAll = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_ALL,
    payload: [],
  })
  localStorage.setItem('todos', JSON.stringify(getState().todos))
}

export const completeTodo = (id) => (dispatch, getState) => {
  dispatch({
    type: COMPLETE_TODO,
    payload: id,
  })
  localStorage.setItem('todos', JSON.stringify(getState().todos))
}

export const filterTodo = (activeFilter) => {
  return {
    type: FILTER_TODOS,
    payload: activeFilter,
  }
}
