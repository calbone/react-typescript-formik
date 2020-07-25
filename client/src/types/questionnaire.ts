type DisclosureScope = 'all' | 'follower' | 'paidMember' | 'none'

type QuestionTypes =
  | 'textarea'
  | 'textbox'
  | 'selectbox'
  | 'radio'
  | 'checkbox'
  | 'radio'
  | 'mail'
  | 'address'

type AnswerLimitStatus = 'once' | 'unlimited'

export interface Choice {
  choice_uuid?: string | null
  choice_title?: string | null
}

interface Question {
  question_uuid?: string | null
  question_type: QuestionTypes
  question_title: string | null
  choices: Choice[]
  required?: boolean
}

export interface Questionnaire {
  id?: number
  user_id?: number
  title: string
  question_data: {
    questions: Question[]
  }
  answer_limit_status: AnswerLimitStatus
  body: string
  show_status: boolean
  disclosure_scope: DisclosureScope
  show_start_datetime: Date
  show_end_datetime: Date
  finish_body: string
  answer_count: number
}
