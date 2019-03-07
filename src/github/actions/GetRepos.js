import { GET_REPOS, NOT_GET_REPOS } from '../constants/ToDoList';
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

export const getRepos = () => {
  return dispatch => {
    return axios.get('https://api.github.com/users/caal-15/repos')
    .then(response => {
    	dispatch(updateRepos(response.data))
    }).catch(error => {
      console.log(error)
      dispatch(NotupdateRepos('Could not fetch Repos :('))
    })
  }
}