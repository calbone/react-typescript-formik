interface choices {
  choice_uuid: string;
  choice_title: string;
}

export interface Questionnaire {
  id: number;
  user_id: number;
  title: string;
  body: string;
  disclosure_scope: "all" | "follower";
  show_status: boolean;
  show_start_datetime: Date;
  show_end_datetime: Date;
  answer_limit_status: "once" | "unlimited";
  finish_body: string;
  answer_count: number;
  question_data: {
    questions: [
      {
        choices?: choices[];
        required: boolean;
        sort_order: number;
        question_type:
          | "textbox"
          | "selectbox"
          | "radio"
          | "textbox"
          | "checkbox"
          | "textarea";
        question_uuid: string;
        question_title: string;
      }
    ];
  };
}
