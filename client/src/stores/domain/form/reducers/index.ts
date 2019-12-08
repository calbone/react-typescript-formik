import { combineReducers } from 'redux'
import { questionnaires } from './questionnaires'

const rootReducer = () =>
  combineReducers({
    questionnaires: questionnaires
  })

export default rootReducer
