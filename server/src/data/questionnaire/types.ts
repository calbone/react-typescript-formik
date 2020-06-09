type DisclosureScope = "follower" | "all";

type AnswerLimitStatus = "once" | "unlimited";

type Choice = {
  choice_uuid?: string | null;
  choice_title?: string | null;
};

type Question = {
  choices?: Choice[];
  required?: boolean;
  question_type?: "textbox" | "selectbox" | "radio" | "textbox" | null;
  question_uuid?: string | null;
  question_title?: string | null;
};

export interface Questionnaire {
  id?: number;
  user_id?: number;
  title?: string;
  body?: string;
  disclosure_scope?: DisclosureScope;
  show_status: boolean;
  show_start_datetime: Date;
  show_end_datetime: Date;
  answer_limit_status: AnswerLimitStatus;
  finish_body: string;
  answer_count: number;
  question_data: {
    questions: Question[];
  };
}
