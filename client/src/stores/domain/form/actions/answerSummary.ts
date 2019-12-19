import { AnswerSummary } from '../type'

export const READ_ANSWER_SUMMARY = 'READ_ANSWER_SUMMARY' as const
export const READ_ANSWER_SUMMARY_SUCCESS = 'READ_ANSWER_SUMMARY_SUCCESS' as const
export const READ_ANSWER_SUMMARY_FAILURE = 'READ_ANSWER_SUMMARY_FAILURE' as const

export const readAnswerSummary = (id: string) => ({
  type: READ_ANSWER_SUMMARY,
  payload: { id }
})
export const readAnswerSummarySuccess = (res: AnswerSummary) => ({
  type: READ_ANSWER_SUMMARY_SUCCESS,
  payload: res
})
export const readAnswerSummaryFailure = (err: any) => ({
  type: READ_ANSWER_SUMMARY_FAILURE,
  payload: err
})

type ReadAnswerSummary = ReturnType<typeof readAnswerSummary>
type ReadAnswerSummarySuccess = ReturnType<typeof readAnswerSummarySuccess>
type ReadAnswerSummaryFailure = ReturnType<typeof readAnswerSummaryFailure>
export type ActionTypes =
  | ReadAnswerSummary
  | ReadAnswerSummarySuccess
  | ReadAnswerSummaryFailure
