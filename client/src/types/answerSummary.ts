type InputType = 'nickname' | 'choice' | 'selectbox' | 'text'

interface Summary {
  choice_title: string
  choice_count: number
}

interface AnswerDetailSummary {
  question_uuid: string
  question_title: string
  type: InputType
  answer_count: number
  summary: Summary[]
}

interface AnswerDetailSummaries {
  answer_detail_summary: AnswerDetailSummary
}

export interface AnswerSummary {
  total_count: number
  confidence_available: boolean
  answer_detail_summaries: AnswerDetailSummaries[]
}
