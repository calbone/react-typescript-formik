import { Questionnaire } from 'api/requests/questionnaire/types'

export interface StateProps {
  questionnaires: Questionnaire[]
}

export interface DispatchProps {
  readQuestionnaires(): void
}

export type MergeProps = DispatchProps & StateProps
