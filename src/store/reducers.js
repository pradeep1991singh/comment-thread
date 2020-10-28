import { combineReducers } from 'redux'
import commentReducers from '../comment/store/reducer'

const rootReducer = combineReducers({
  commentStore: commentReducers
})

export default rootReducer
