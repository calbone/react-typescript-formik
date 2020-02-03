import { takeEvery, call, put } from 'redux-saga/effects'
import * as actions from 'stores/domain/form/actions/answerSummary'
import { readAnswerSummaryRequest } from 'api/requests/answerSummary'

export function* handleReadAnswerSummaryRequest(action: actions.ActionTypes) {
  try {
    const res = yield call(readAnswerSummaryRequest, action.payload)
    yield put(actions.readAnswerSummarySuccess(res.data))
  } catch (err) {
    yield put(actions.readAnswerSummaryFailure(err))
    console.error(err)
  }
}

function* answerSummarySagas() {
  yield takeEvery(actions.READ_ANSWER_SUMMARY, handleReadAnswerSummaryRequest)
}

export default answerSummarySagas
