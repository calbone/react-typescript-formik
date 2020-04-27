import Express from "express";
import cors from "cors";
// import uuidv4 from "uuid/v4";
import QuestionnairesJson from "./data/questionnaires.json";
import answersData from "./data/answers";

const app = Express();

// リクエスト解析(body-parser)
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// cors対応
app.use(cors());

type Questionnaire = typeof QuestionnairesJson;

type Summary = (
  | string
  | {
      choice_title: string;
      choice_count: number;
    }
  | null
)[];
type FormType = "nickname" | "choice" | "selectbox" | "text";
type AnswerDetailSummary = {
  question_uuid: string;
  question_title: string;
  type: FormType;
  answer_count: number;
  summary: Summary;
};

type AnswerDetailSummaries = {
  answer_detail_summary: AnswerDetailSummary;
};

type AnswerSummary = {
  total_count: number;
  confidence_available: boolean;
  answer_detail_summaries: AnswerDetailSummaries[];
};

// ルーティング設定
// app.get("/api/v2/current_user/owner/questionnaires", (req, res) => {
//   const data: Questionnaire[] = QuestionnairesJson.questionnaires;
//   res.json(data);
// });
app.get(
  "/api/v2/current_user/owner/questionnaires/:id/answer_summary",
  (req, res) => {
    const data: AnswerSummary = answersData.questionnaire_result;
    res.json(data);
  }
);
// app.post("/api/v1/hoge", (req, res) => {
//   const reqBody = req.body;
//   const title = reqBody.title;
//   const id = uuidv4();
//   const data = {
//     id,
//     title
//   };
//   response.push(data);
//   console.log(`post success!! ${JSON.stringify(response)}`);
//   res.json(data);
// });

const PORT = 8080;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Running http://${HOST}:${PORT}`);
});
