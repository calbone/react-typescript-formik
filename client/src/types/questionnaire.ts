type DisclosureScope = 'all' | 'follower' | 'paidMember'

type QuestionTypes = 'textbox' | 'selectbox' | 'radio' | 'textbox'

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
  title: string | null
  body: string | null
  disclosure_scope: DisclosureScope | null
  show_status: boolean
  show_start_datetime: Date
  show_end_datetime: Date
  answer_limit_status: 'once' | 'unlimited'
  finish_body: string
  answer_count: number
  question_data: {
    questions: Question[]
  }
}
