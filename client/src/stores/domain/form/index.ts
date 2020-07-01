import { QuestionnaireState } from 'stores/domain/form/questionnaires'
import { AnswerSummaryState } from 'stores/domain/form/answerSummary'

export interface State {
  questionnaires: QuestionnaireState
  answerSummary: AnswerSummaryState
}
