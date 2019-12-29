type QuestionType = "textbox" | "selectbox" | "radio" | "checkbox" | "textarea";
type DisclosureScope = "all" | "follower";
type AnswerLimitStatus = "once" | "unlimited";

interface Choice {
  choice_uuid: string;
  choice_title: string;
}

interface Question {
  choices?: Choice[];
  required: boolean;
  question_type: QuestionType;
  question_uuid: string;
  question_title: string;
}

export interface Questionnaire {
  id: number;
  user_id: number;
  title: string;
  body: string;
  disclosure_scope: DisclosureScope;
  show_status: boolean;
  show_start_datetime: string;
  show_end_datetime: string;
  answer_limit_status: AnswerLimitStatus;
  finish_body: string;
  answer_count: number;
  question_data: {
    questions: Question[];
  };
}
