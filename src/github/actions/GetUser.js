import { GET_USER } from '../constants/ToDoList';
import axios from 'axios';

export const updateUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const getUser = () => {
  return dispatch => {
    return axios.get('https://api.github.com/users/caal-15')
    .then(response => {
    	dispatch(updateUser(response.data))
    }).catch(error => {
    	console.log(error)
    })
  }
}