import { all } from 'redux-saga/effects'
import questionnairesSagas from './domain/form/saga'
// import answerSummarySagas from './answerSummary';

export default function* rootSaga() {
  yield all([questionnairesSagas()])
}
