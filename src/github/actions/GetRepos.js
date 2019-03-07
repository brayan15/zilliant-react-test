import {
  GET_REPOS,
  NOT_GET_REPOS,
  SELECTED_REPO,
  UNSELECTED_REPO,
  FETCHING_REPOS,
  HIDE_ERROR
} from '../constants/ToDoList';
import axios from 'axios';

export const updateRepos = (repos) => {
  return {
    type: GET_REPOS,
    repos
  }
}

export const NotupdateRepos = (error) => {
  return {
    type: NOT_GET_REPOS,
    error: error,
  }
}

export const selectRepo = (id) => {
  return {
    type: SELECTED_REPO,
    id,
  }
}

export const unSelectRepo = () => {
  return {
    type: UNSELECTED_REPO,
  }
}

export const isFetchigRepos = (data) => {
  return {
    type: FETCHING_REPOS,
    data
  }
}

export const hideMessageError = (error) => {
  return {
    type: HIDE_ERROR,
    error: error,
  }
}


export const getRepos = () => {
  return dispatch => {
    dispatch(isFetchigRepos(true))
    return axios.get('https://api.github.com/users/caal-15/repos')
    .then(response => {
    	dispatch(updateRepos(response.data))
    }).catch(error => {
      console.log(error)
      dispatch(NotupdateRepos('Could not fetch Repos :('))
    })
  }
}