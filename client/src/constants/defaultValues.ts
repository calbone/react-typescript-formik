import { Questionnaire, Choice, Question } from 'types/questionnaire'

export const defaultChoice: Choice = {
  choice_uuid: null,
  choice_title: null,
}

export const defaultQuestion: Question = {
  question_uuid: null,
  question_type: 'none',
  question_title: null,
  choices: [defaultChoice],
  required: false,
}

export const defaultValues: Questionnaire = {
  title: '',
  question_data: {
    questions: [defaultQuestion],
  },
  answer_limit_status: 'unlimited',
  body: '',
  show_status: true,
  disclosure_scope: 'none',
  show_start_datetime: new Date(),
  show_end_datetime: new Date(),
  finish_body:
    'この度はエントリーいただき誠にありがとうございました。\nエントリーが無事、完了いたしました。',
  answer_count: 0,
}
