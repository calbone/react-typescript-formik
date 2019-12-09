import { AnswerSummaryState } from '../type'
import * as actions from '../actions/answerSummary'

const initialState: AnswerSummaryState = {
  answerSummary: {}
}

export const answerSummary = (
  state = initialState,
  action: actions.ActionTypes
) => {
  const { type, payload } = action
  switch (type) {
    case actions.READ_ANSWER_SUMMARY:
      return { ...state }
    case actions.READ_ANSWER_SUMMARY_SUCCESS:
      return {
        ...state,
        answerSummary: payload
      }
    case actions.READ_ANSWER_SUMMARY_FAILURE:
      return { ...state }
    default:
      return { ...state }
  }
}
