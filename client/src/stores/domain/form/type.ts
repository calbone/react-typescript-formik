export interface QuestionnairesState {
  questionnaires: []
  questionnaire: {}
  create: { loaded: boolean; error: boolean | null }
  read: { loaded: boolean; error: boolean | null }
  update: { loaded: boolean; error: boolean | null }
  delete: { loaded: boolean; error: boolean | null }
}

interface Questionnaires {
  id: number
  user_id: number
  title: string
  body: string
  disclosure_scope: 'all' | 'follower'
  show_status: boolean
  show_start_datetime: Date
  show_end_datetime: Date
  answer_limit_status: 'once' | 'unlimited'
  question_data: {
    questions: [
      {
        choices?: [
          {
            choice_uuid: string
            choice_title: string
          }
        ]
        required: boolean
        sort_order: number
        question_type: 'textbox' | 'selectbox' | 'radio' | 'textbox'
        question_uuid: string
        question_title: string
      }
    ]
  }
  finish_body: string
  answer_count: number
}

export interface QuestionnairesResultAPI {
  payload?: Questionnaires[]
}
