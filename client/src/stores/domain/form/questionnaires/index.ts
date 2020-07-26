import { Questionnaire } from 'types/questionnaire'
import { takeEvery, call, put } from 'redux-saga/effects'
import {
  readQuestionnairesRequest,
  readQuestionnaireRequest,
} from 'api/requests/questionnaire'

// ActionType
const CLEAR_QUESTIONNAIRE = 'CLEAR_QUESTIONNAIRE' as const
const READ_QUESTIONNAIRES = 'READ_QUESTIONNAIRES' as const
const READ_QUESTIONNAIRES_SUCCESS = 'READ_QUESTIONNAIRES_SUCCESS' as const
const READ_QUESTIONNAIRES_FAILURE = 'READ_QUESTIONNAIRES_FAILURE' as const
const READ_QUESTIONNAIRE = 'READ_QUESTIONNAIRE' as const
const READ_QUESTIONNAIRE_SUCCESS = 'READ_QUESTIONNAIRE_SUCCESS' as const
const READ_QUESTIONNAIRE_FAILURE = 'READ_QUESTIONNAIRE_FAILURE' as const

// ActionCreator
export const clearQuestionnaire = () => ({
  type: CLEAR_QUESTIONNAIRE,
  // TODO: payloadはいらないがつけないとtypeエラーになる
  payload: '',
})
export const readQuestionnaires = () => ({
  type: READ_QUESTIONNAIRES,
  // TODO: payloadはいらないがつけないとtypeエラーになる
  payload: '',
})
export const readQuestionnairesSuccess = (res: Questionnaire) => ({
  type: READ_QUESTIONNAIRES_SUCCESS,
  payload: res,
})
export const readQuestionnairesFailure = (err: any) => ({
  type: READ_QUESTIONNAIRES_FAILURE,
  payload: err,
})

export const readQuestionnaire = (id: string) => ({
  type: READ_QUESTIONNAIRE,
  payload: {
    id,
  },
})
export const readQuestionnaireSuccess = (res: Questionnaire) => ({
  type: READ_QUESTIONNAIRE_SUCCESS,
  payload: res,
})
export const readQuestionnaireFailure = (err: any) => ({
  type: READ_QUESTIONNAIRE_FAILURE,
  payload: err,
})

type ClearQuestionnaire = ReturnType<typeof clearQuestionnaire>
type ReadQuestionnaires = ReturnType<typeof readQuestionnaires>
type ReadQuestionnairesSuccess = ReturnType<typeof readQuestionnairesSuccess>
type ReadQuestionnairesFailure = ReturnType<typeof readQuestionnairesFailure>
type ReadQuestionnaire = ReturnType<typeof readQuestionnaire>
type ReadQuestionnaireSuccess = ReturnType<typeof readQuestionnaireSuccess>
type ReadQuestionnaireFailure = ReturnType<typeof readQuestionnaireFailure>

export type ActionTypes =
  | ClearQuestionnaire
  | ReadQuestionnaires
  | ReadQuestionnairesSuccess
  | ReadQuestionnairesFailure
  | ReadQuestionnaire
  | ReadQuestionnaireSuccess
  | ReadQuestionnaireFailure

// reducer
export interface QuestionnaireState {
  questionnaires: Questionnaire[] | null
  questionnaire: Questionnaire | null
  create: { loaded: boolean; error: boolean | null }
  read: { loaded: boolean; error: boolean | null }
  update: { loaded: boolean; error: boolean | null }
  delete: { loaded: boolean; error: boolean | null }
}

const initialState: QuestionnaireState = {
  questionnaires: null,
  questionnaire: null,
  create: { loaded: true, error: null },
  read: { loaded: true, error: null },
  update: { loaded: true, error: null },
  delete: { loaded: true, error: null },
}

export const questionnaires = (
  state = initialState,
  action: ActionTypes
): QuestionnaireState => {
  const { type, payload } = action
  switch (type) {
    case CLEAR_QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: null,
      }
    // case ActionTypes.CREATE_QUESTIONNAIRES:
    //   return {
    //     ...state,
    //     create: { loaded: false, error: null }
    //   }
    // case ActionTypes.CREATE_QUESTIONNAIRES_SUCCESS:
    //   return {
    //     ...state,
    //     create: { loaded: true, error: false }
    //   }
    // case ActionTypes.CREATE_QUESTIONNAIRES_FAILURE:
    //   return {
    //     ...state,
    //     create: { loaded: true, error: true }
    //   }
    case READ_QUESTIONNAIRES:
      return {
        ...state,
        read: { loaded: false, error: null },
      }
    case READ_QUESTIONNAIRES_SUCCESS:
      return {
        ...state,
        questionnaires: payload,
        read: { loaded: true, error: false },
      }
    case READ_QUESTIONNAIRES_FAILURE:
      return {
        ...state,
        read: { loaded: true, error: true },
      }
    case READ_QUESTIONNAIRE:
      return {
        ...state,
        read: { loaded: false, error: null },
      }
    case READ_QUESTIONNAIRE_SUCCESS:
      return {
        ...state,
        questionnaire: payload,
        read: { loaded: true, error: false },
      }
    case READ_QUESTIONNAIRE_FAILURE:
      return {
        ...state,
        read: { loaded: true, error: true },
      }
    // case ActionTypes.UPDATE_QUESTIONNAIRES:
    //   return {
    //     ...state,
    //     update: { loaded: false, error: null }
    //   }
    // case ActionTypes.UPDATE_QUESTIONNAIRES_SUCCESS:
    //   return {
    //     ...state,
    //     update: { loaded: true, error: false }
    //   }
    // case ActionTypes.UPDATE_QUESTIONNAIRES_FAILURE:
    //   return {
    //     ...state,
    //     update: { loaded: true, error: true }
    //   }
    default:
      return { ...state }
  }
}

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
    yield put(readQuestionnairesSuccess(res))
  } catch (err) {
    yield put(readQuestionnairesFailure(err))
    console.error(err)
  }
}

export function* handleReadQuestionnaireRequest(action: ActionTypes) {
  try {
    const res = yield call(readQuestionnaireRequest, action.payload)
    yield put(readQuestionnaireSuccess(res.data))
  } catch (err) {
    yield put(readQuestionnaireFailure(err))
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

export function* questionnairesSagas() {
  // yield takeEvery(
  //   ActionTypes.CREATE_QUESTIONNAIRES,
  //   handleCreateQuestionnairesRequest
  // )
  yield takeEvery(READ_QUESTIONNAIRES, handleReadQuestionnairesRequest)
  yield takeEvery(READ_QUESTIONNAIRE, handleReadQuestionnaireRequest)
  // yield takeEvery(
  //   ActionTypes.UPDATE_QUESTIONNAIRES,
  //   handleUpdateQuestionnairesRequest
  // )
}
