import { GET_USER } from '../constants/ToDoList';

const initialState = [];

const GetUserReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default GetUserReducer;