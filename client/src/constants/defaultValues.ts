import { Questionnaire } from 'types/questionnaire'

export const defaultValues: Questionnaire = {
  title: '',
  question_data: {
    questions: [
      {
        question_uuid: null,
        question_type: 'textarea',
        question_title: null,
        choices: [
          {
            choice_uuid: null,
            choice_title: null,
          },
        ],
        required: false,
      },
    ],
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
