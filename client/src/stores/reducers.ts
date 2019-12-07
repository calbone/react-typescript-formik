import { combineReducers } from 'redux'
import { questionnaires } from './domain/form/reducer'

const rootReducer = () =>
  combineReducers({
    questionnaires: questionnaires
  })

export default rootReducer
