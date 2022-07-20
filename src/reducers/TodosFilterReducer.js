import { FILTER_TODOS } from '../constants'

const filtersReducer = (state = 'all', action) => {
  switch (action.type) {
    case FILTER_TODOS:
      return action.payload
    default:
      return state
  }
}

export default filtersReducer
