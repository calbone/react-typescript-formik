type DisclosureScope = 'all' | 'follower' | 'paidMember' | 'none'

type QuestionTypes = 'textbox' | 'selectbox' | 'radio' | 'textbox'

type AnswerLimitStatus = 'once' | 'unlimited'

interface Question {
  choices?: [
    {
      choice_uuid?: string | null
      choice_title?: string | null
    }
  ]
  required?: boolean
  question_type?: QuestionTypes | null
  question_uuid?: string | null
  question_title?: string | null
}

export interface Questionnaire {
  id?: number
  user_id?: number
  title: string
  body: string
  disclosure_scope?: DisclosureScope
  show_status: boolean
  show_start_datetime: Date
  show_end_datetime: Date
  answer_limit_status: AnswerLimitStatus
  finish_body: string
  answer_count: number
  question_data: {
    questions: Question[]
  }
}
