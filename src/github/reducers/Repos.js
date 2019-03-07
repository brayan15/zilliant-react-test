import { GET_REPOS, NOT_GET_REPOS } from '../constants/ToDoList';

const initialState = {
  repos: null,
  isFetchingRepos: false,
  errorMsg: null,
};

const GetReposReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case GET_REPOS:
      return {
        ...state,
        repos: action.repos
      }
    case NOT_GET_REPOS:
      return {
        ...state,
        errorMsg: action.error
      }
    default:
      return state
  }
}

export default GetReposReducer;