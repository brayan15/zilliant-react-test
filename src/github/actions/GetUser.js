import { GET_USER, NOT_GET_USER, HIDE_ERROR } from '../constants/ToDoList';
import axios from 'axios';

export const updateUser = (user) => {
  return {
    type: GET_USER,
    user
  }
}

export const NotupdateUser = (error) => {
  return {
    type: NOT_GET_USER,
    error: error,
  }
}

export const hideMessageError = (error) => {
  return {
    type: HIDE_ERROR,
    error: error,
  }
}

export const getUser = () => {
  return dispatch => {
    return axios.get('https://api.github.com/users/caal-15')
    .then(response => {
    	dispatch(updateUser(response.data))
    }).catch(error => {
      console.log(error)
      dispatch(NotupdateUser('Could not fetch Users :('))
    })
  }
}