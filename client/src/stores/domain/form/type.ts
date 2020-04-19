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

// mapStateToPropsのinterface
export interface Questionnaire {
  id?: number
  user_id?: number
  title?: string
  body?: string
  disclosure_scope?: 'all' | 'follower'
  show_status: boolean
  show_start_datetime: Date
  show_end_datetime: Date
  answer_limit_status: 'once' | 'unlimited'
  question_data: {
    questions: [
      {
        choices?: [
          {
            choice_uuid?: string | null
            choice_title?: string | null
          }
        ]
        required?: boolean
        question_type?: 'textbox' | 'selectbox' | 'radio' | 'textbox' | null
        question_uuid?: string | null
        question_title?: string | null
      }
    ]
  }
  finish_body: string
  answer_count: number
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
