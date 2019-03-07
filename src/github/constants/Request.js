import axios from 'axios'

const config = {
  baseUrl: process.env.REACT_APP_API_URL,
  user: process.env.REACT_APP_USER
}  

export const getUserRequest = axios.get(`${config.baseUrl}/users/${config.user}`)

export const getReposRequest = axios.get(
  `${config.baseUrl}/users/${config.user}/repos`
)
