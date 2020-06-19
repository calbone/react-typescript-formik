import { AnswerSummary } from 'types/answerSummary'
import { takeEvery, call, put } from 'redux-saga/effects'
import { readAnswerSummaryRequest } from 'api/requests/answerSummary'

// action
export const READ_ANSWER_SUMMARY = 'READ_ANSWER_SUMMARY' as const
export const READ_ANSWER_SUMMARY_SUCCESS = 'READ_ANSWER_SUMMARY_SUCCESS' as const
export const READ_ANSWER_SUMMARY_FAILURE = 'READ_ANSWER_SUMMARY_FAILURE' as const

export const readAnswerSummary = (id: string) => ({
  type: READ_ANSWER_SUMMARY,
  payload: { id },
})
export const readAnswerSummarySuccess = (res: AnswerSummary) => ({
  type: READ_ANSWER_SUMMARY_SUCCESS,
  payload: res,
})
export const readAnswerSummaryFailure = (err: any) => ({
  type: READ_ANSWER_SUMMARY_FAILURE,
  payload: err,
})

type ReadAnswerSummary = ReturnType<typeof readAnswerSummary>
type ReadAnswerSummarySuccess = ReturnType<typeof readAnswerSummarySuccess>
type ReadAnswerSummaryFailure = ReturnType<typeof readAnswerSummaryFailure>
export type ActionTypes =
  | ReadAnswerSummary
  | ReadAnswerSummarySuccess
  | ReadAnswerSummaryFailure

// reducer
interface AnswerSummaryState {
  answerSummary: AnswerSummary | null
}

const initialState: AnswerSummaryState = {
  answerSummary: null,
}

export const answerSummary = (state = initialState, action: ActionTypes) => {
  const { type, payload } = action
  switch (type) {
    case READ_ANSWER_SUMMARY:
      return { ...state }
    case READ_ANSWER_SUMMARY_SUCCESS:
      return {
        ...state,
        answerSummary: payload,
      }
    case READ_ANSWER_SUMMARY_FAILURE:
      return { ...state }
    default:
      return { ...state }
  }
}

export function* handleReadAnswerSummaryRequest(action: ActionTypes) {
  try {
    const res = yield call(readAnswerSummaryRequest, action.payload)
    yield put(readAnswerSummarySuccess(res.data))
  } catch (err) {
    yield put(readAnswerSummaryFailure(err))
    console.error(err)
  }
}

export function* answerSummarySagas() {
  yield takeEvery(READ_ANSWER_SUMMARY, handleReadAnswerSummaryRequest)
}
