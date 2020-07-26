import Express from "express";
import cors from "cors";
// import uuidv4 from "uuid/v4";
import Questionnaires from "./data/questionnaire/list.json";
import { Questionnaire } from "./data/questionnaire/types";
import answerSummaryData from "./data/answerSummary";
import { AnswerSummary } from "./data/answerSummary/types";

const app = Express();

// リクエスト解析(body-parser)
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
// cors対応
app.use(cors());

// ルーティング設定
app.get("/api/v2/current_user/owner/questionnaires", (req, res) => {
  const data: Questionnaire[] = Questionnaires.data;
  res.json(data);
});

app.get("/api/v2/current_user/owner/questionnaires/:id", (req, res) => {
  const data: Questionnaire[] = Questionnaires.data.filter((Questionnaire) => {
    return Questionnaire.id === Number(req.params.id);
  });
  res.json(data[0]);
});

app.get(
  "/api/v2/current_user/owner/questionnaires/:id/answer_summary",
  (req, res) => {
    const data: AnswerSummary = answerSummaryData;
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
