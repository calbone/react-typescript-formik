import { AnswerSummary } from "./types";

const answersData: AnswerSummary = {
  total_count: 14,
  confidence_available: true,
  answer_detail_summaries: [
    {
      answer_detail_summary: {
        question_uuid: "",
        question_title: "ニックネーム",
        type: "nickname" as const,
        answer_count: 0,
        summary: ["ikeda_", "ikedastock_", "ほげこちゃん"],
      },
    },
    {
      answer_detail_summary: {
        question_uuid: "q77df325a1d544c7b194c6c3d777a1c7",
        question_title: "欲しいものは？",
        type: "choice" as const,
        answer_count: 7,
        summary: [
          {
            choice_title: "次のライブのチケット",
            choice_count: 14,
          },
          {
            choice_title: "使い終わったピック",
            choice_count: 6,
          },
        ],
      },
    },
    {
      answer_detail_summary: {
        question_uuid: "q37df325a1d544c7b194c6c3d777a1c7",
        question_title: "どのガムが好き？",
        type: "selectbox" as const,
        answer_count: 2,
        summary: [null, null],
      },
    },
    {
      answer_detail_summary: {
        question_uuid: "q72df325a1d544c7b194c6c3d777a1c7",
        question_title: "どのタバコが好き？",
        type: "choice" as const,
        answer_count: 9,
        summary: [
          {
            choice_title: "メビウス",
            choice_count: 6,
          },
          {
            choice_title: "SEVEN STAR",
            choice_count: 6,
          },
        ],
      },
    },
    {
      answer_detail_summary: {
        question_uuid: "q50f66d1fc1244f7b303b4f673234e53",
        question_title: "応援メッセージをお願いします！",
        type: "text" as const,
        answer_count: 8,
        summary: ["aaaa", "", "sss", "はげ", "はげ"],
      },
    },
    {
      answer_detail_summary: {
        question_uuid: "q08d7234276c47ffaa6314e9bd78ad4d",
        question_title: "何か要望があればどうぞ",
        type: "text" as const,
        answer_count: 8,
        summary: ["ggggg", "s", "", "ほげ", "ほげ"],
      },
    },
  ],
};

export default answersData;
