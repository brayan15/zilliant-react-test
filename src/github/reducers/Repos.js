import { 
  GET_REPOS,
  NOT_GET_REPOS,
  SELECTED_REPO,
  UNSELECTED_REPO,
  FETCHING_REPOS,
  HIDE_ERROR
} from '../constants/ToDoList';

const initialState = {
  repos: null,
  isFetchingRepos: false,
  errorMsg: null,
  selectedRepo: null
};

const GetReposReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case FETCHING_REPOS:
      return {
        ...state,
        isFetchingRepos: action.data
      }
    case HIDE_ERROR:
      return {
        ...state,
        errorMsg: action.error
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.repos,
        isFetchingRepos: false
      }
    case NOT_GET_REPOS:
      return {
        ...state,
        errorMsg: action.error
      }
    case SELECTED_REPO:
      return {
        ...state,
        selectedRepo: state.repos.find(repositore => {
          return repositore.id === action.id
        })
      }
    case UNSELECTED_REPO:
      return {
        ...state,
        selectedRepo: null
      }
    default:
      return state
  }
}

export default GetReposReducer;