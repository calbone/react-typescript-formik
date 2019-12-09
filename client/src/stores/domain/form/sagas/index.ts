import { all } from 'redux-saga/effects'
import questionnairesSagas from './questionnaires'
import answerSummarySagas from './answerSummary'

export default function* rootSaga() {
  yield all([questionnairesSagas(), answerSummarySagas()])
}
