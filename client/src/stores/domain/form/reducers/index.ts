import { combineReducers } from 'redux'
import { questionnaires } from './questionnaires'
import { answerSummary } from './answerSummary'

const rootReducer = () =>
  combineReducers({
    questionnaires,
    answerSummary
  })

export default rootReducer
