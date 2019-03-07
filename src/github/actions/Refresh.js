import { getRepos } from './GetRepos'
import { getUser } from './GetUser'

export const refreshDatas = () => {
  return dispatch => {
    dispatch(getRepos())
    dispatch(getUser())
  }
}