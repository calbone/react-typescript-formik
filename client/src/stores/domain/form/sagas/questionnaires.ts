import { takeEvery, call, put } from 'redux-saga/effects'
import * as actions from '../actions/questionnaires'
import {
  readQuestionnairesRequest,
  readQuestionnaireRequest,
} from 'api/requests/questionnaire'

// export function* handleCreateQuestionnairesRequest(action) {
//   try {
//     yield call(createQuestionnairesRequest, action.payload)
//     yield put(createQuestionnairesSuccess())
//   } catch (err) {
//     yield put(createQuestionnairesFailure())
//     console.error(err)
//   }
// }

export function* handleReadQuestionnairesRequest() {
  try {
    const res = yield call(readQuestionnairesRequest)
    yield put(actions.readQuestionnairesSuccess(res))
  } catch (err) {
    yield put(actions.readQuestionnairesFailure(err))
    console.error(err)
  }
}

export function* handleReadQuestionnaireRequest(action: actions.ActionTypes) {
  try {
    const res = yield call(readQuestionnaireRequest, action.payload)
    yield put(actions.readQuestionnaireSuccess(res.data))
  } catch (err) {
    yield put(actions.readQuestionnaireFailure(err))
    console.error(err)
  }
}

// export function* handleUpdateQuestionnairesRequest(action) {
//   try {
//     yield call(updateQuestionnairesRequest, action.payload)
//     yield put(updateQuestionnairesSuccess())
//   } catch (err) {
//     yield put(updateQuestionnairesFailure())
//     console.error(err)
//   }
// }

function* questionnairesSagas() {
  // yield takeEvery(
  //   ActionTypes.CREATE_QUESTIONNAIRES,
  //   handleCreateQuestionnairesRequest
  // )
  yield takeEvery(actions.READ_QUESTIONNAIRES, handleReadQuestionnairesRequest)
  yield takeEvery(actions.READ_QUESTIONNAIRE, handleReadQuestionnaireRequest)
  // yield takeEvery(
  //   ActionTypes.UPDATE_QUESTIONNAIRES,
  //   handleUpdateQuestionnairesRequest
  // )
}

export default questionnairesSagas
