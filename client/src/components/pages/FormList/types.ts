import { Questionnaire } from 'stores/domain/form/type'

export interface StateProps {
  questionnaires: Questionnaire[]
}

export interface DispatchProps {
  readQuestionnaires(): void
}

export type MergeProps = DispatchProps & StateProps
