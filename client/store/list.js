import axios from 'axios'

// ACTION TYPES
const GET_CURRENT_LIST = 'GET_CURRENT_LIST'

// INITIAL STATE
const defaultState = {
  currentList: {},
  allLists: []
}

// ACTION CREATORS
const getCurrentList = currentList => ({type: GET_CURRENT_LIST, currentList})

// THUNKS
export const fetchCurrentList = (userId) => async dispatch => {
  try {
    const { data: currentList } = await axios.get(`/api/lists/${userId}`)
    dispatch(getCurrentList(currentList))
  } catch (err) {
    console.error(err)
  }
}

// HANDLERS
const handler = {
  [GET_CURRENT_LIST]: (state, action) => {
    return {...state, currentList: action.currentList}
  }
}

// REDUCER
export default function(state = defaultState, action) {
  if (!handler.hasOwnProperty(action.type)) {
    return state
  } else {
    return handler[action.type](state, action)
  }
}


