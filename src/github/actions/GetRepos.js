import { GET_REPOS } from '../constants/ToDoList';
import axios from 'axios';

export const updateRepos = (repos) => {
  return {
    type: GET_REPOS,
    repos
  }
}

export const getRepos = () => {
  return dispatch => {
    return axios.get('https://api.github.com/users/caal-15/repos')
    .then(response => {
    	dispatch(updateRepos(response.data))
    }).catch(error => {
    	console.log(error)
    })
  }
}