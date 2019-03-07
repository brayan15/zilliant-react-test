import { GET_USER, NOT_GET_USER, HIDE_ERROR } from '../constants/ToDoList'

const initialState = {
  user: null,
  isFetchingUser: false,
  errorMsg: null,
  lastSuccessfullUserFetch: null
};

const GetUserReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case HIDE_ERROR:
      return {
        ...state,
        errorMsg: action.error
      }
    case GET_USER:
      return {
        ...state,
        user: action.user,
        lastSuccessfullUserFetch: new Date()
      }
    case NOT_GET_USER:
      return {
        ...state,
        errorMsg: action.error
      }
    default:
      return state
  }
}

export default GetUserReducer;