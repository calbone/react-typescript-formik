import { combineReducers } from 'redux'
import { questionnaires } from './questionnaires'
import { answerSummary } from './answerSummary'

const rootReducer = () =>
  combineReducers({
    questionnaires: questionnaires,
    answerSummary: answerSummary
  })

export default rootReducer
