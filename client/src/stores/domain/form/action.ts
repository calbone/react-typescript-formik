import { QuestionnairesResultAPI } from './type'
export const READ_QUESTIONNAIRES = 'READ_QUESTIONNAIRES' as const
export const READ_QUESTIONNAIRES_SUCCESS = 'READ_QUESTIONNAIRES_SUCCESS' as const
export const READ_QUESTIONNAIRES_FAILURE = 'READ_QUESTIONNAIRES_FAILURE' as const

export const readQuestionnaires = () => ({
  type: READ_QUESTIONNAIRES,
  payload: ''
})
export const readQuestionnairesSuccess = (res: QuestionnairesResultAPI) => ({
  type: READ_QUESTIONNAIRES_SUCCESS,
  payload: res
})
export const readQuestionnairesFailure = (err: any) => ({
  type: READ_QUESTIONNAIRES_FAILURE,
  payload: err
})

type ReadQuestionnaires = ReturnType<typeof readQuestionnaires>
type ReadQuestionnairesSuccess = ReturnType<typeof readQuestionnairesSuccess>
type ReadQuestionnairesFailure = ReturnType<typeof readQuestionnairesFailure>
export type ActionTypes =
  | ReadQuestionnaires
  | ReadQuestionnairesSuccess
  | ReadQuestionnairesFailure
