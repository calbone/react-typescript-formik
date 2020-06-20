import { AnswerSummary } from 'types/answerSummary'
import { Questionnaire } from 'types/questionnaire'
import { RouteComponentProps } from 'react-router-dom'

export interface DispathProps {
  readQuestionnaire: (id: string) => void
  readAnswerSummary: (id: string) => void
}

export interface StateProps {
  questionnaire: Questionnaire
  answerSummary: AnswerSummary
}

export type MergeProps = DispathProps &
  StateProps &
  RouteComponentProps<{ id: string }>