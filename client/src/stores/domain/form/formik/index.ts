import { Questionnaire } from 'types/questionnaire'

export const defaultValues: Questionnaire = {
  title: '',
  body: '',
  disclosure_scope: '',
  show_status: true,
  show_start_datetime: new Date(),
  show_end_datetime: new Date(),
  answer_limit_status: 'unlimited',
  finish_body:
    'この度はエントリーいただき誠にありがとうございました。\nエントリーが無事、完了いたしました。',
  answer_count: 0,
  question_data: {
    questions: [
      {
        choices: [
          {
            choice_uuid: null,
            choice_title: null,
          },
        ],
        required: false,
        question_type: null,
        question_uuid: null,
        question_title: null,
      },
    ],
  },
}
