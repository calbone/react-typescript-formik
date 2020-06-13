import { Questionnaire } from 'api/requests/questionnaire/types'

export const READ_QUESTIONNAIRES = 'READ_QUESTIONNAIRES' as const
export const READ_QUESTIONNAIRES_SUCCESS = 'READ_QUESTIONNAIRES_SUCCESS' as const
export const READ_QUESTIONNAIRES_FAILURE = 'READ_QUESTIONNAIRES_FAILURE' as const
export const READ_QUESTIONNAIRE = 'READ_QUESTIONNAIRE' as const
export const READ_QUESTIONNAIRE_SUCCESS = 'READ_QUESTIONNAIRE_SUCCESS' as const
export const READ_QUESTIONNAIRE_FAILURE = 'READ_QUESTIONNAIRE_FAILURE' as const

export const readQuestionnaires = () => ({
  type: READ_QUESTIONNAIRES,
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

type ReadQuestionnaires = ReturnType<typeof readQuestionnaires>
type ReadQuestionnairesSuccess = ReturnType<typeof readQuestionnairesSuccess>
type ReadQuestionnairesFailure = ReturnType<typeof readQuestionnairesFailure>
type ReadQuestionnaire = ReturnType<typeof readQuestionnaire>
type ReadQuestionnaireSuccess = ReturnType<typeof readQuestionnaireSuccess>
type ReadQuestionnaireFailure = ReturnType<typeof readQuestionnaireFailure>
export type ActionTypes =
  | ReadQuestionnaires
  | ReadQuestionnairesSuccess
  | ReadQuestionnairesFailure
  | ReadQuestionnaire
  | ReadQuestionnaireSuccess
  | ReadQuestionnaireFailure
