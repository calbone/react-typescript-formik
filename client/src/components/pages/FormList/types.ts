import { Questionnaire } from 'types/questionnaire'

export interface StateProps {
  questionnaires: Questionnaire[]
}

export interface DispatchProps {
  readQuestionnaires(): void
}

export type MergeProps = DispatchProps & StateProps
