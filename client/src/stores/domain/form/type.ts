// reducer/initialStateのinterface
export interface QuestionnairesState {
  questionnaires: []
  questionnaire: {}
  create: { loaded: boolean; error: boolean | null }
  read: { loaded: boolean; error: boolean | null }
  update: { loaded: boolean; error: boolean | null }
  delete: { loaded: boolean; error: boolean | null }
}

export interface AnswerSummaryState {
  answerSummary: object
}

interface AnswerDetailSummaries {
  answer_detail_summary: AnswerDetailSummary
}

interface AnswerDetailSummary {
  question_uuid: string
  question_title: string
  type: 'nickname' | 'choice' | 'selectbox' | 'text'
  answer_count: number
  summary: Summary[]
}

type Summary = {
  choice_title: string
  choice_count: number
}

export interface AnswerSummary {
  total_count: number
  confidence_available: boolean
  answer_detail_summaries: AnswerDetailSummaries[]
}
