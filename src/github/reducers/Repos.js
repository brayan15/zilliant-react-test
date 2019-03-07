import { GET_REPOS } from '../constants/ToDoList';

const initialState = [];

const GetReposReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.repos
      }
    default:
      return state
  }
}

export default GetReposReducer;