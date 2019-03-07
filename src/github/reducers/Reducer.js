import { combineReducers } from 'redux'
import GetUserReducer from './User'
import GetReposReducer from './Repos'


const rootReducer = combineReducers ({
    GetUserReducer,
    GetReposReducer
})

export default rootReducer;