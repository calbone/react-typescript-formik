import Express from "express";
// import uuidv4 from "uuid/v4";
import { Questionnaire } from "./type";

const app = Express();

// リクエスト解析(body-parser)
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

const response: Questionnaire[] = [
  {
    id: 1,
    user_id: 7738,
    title: "【募集】1103BDParty「企画アイデア＆RIRIへ\nの質問」応募フォーム",
    body:
      "【応募事項】 <br>・応募は会員様お一人１回までとなります。  <br>応募後の内容変更は受付できませんので、 お間違いがないか確かめの上、ご応募ください。",
    disclosure_scope: "follower",
    show_status: false,
    answer_limit_status: "once",
    finish_body:
      "ご応募を受付いたしました。\\n この度はご応募いただきありがとうございました。",
    answer_count: 14,
    question_data: {
      questions: [
        {
          choices: [
            {
              choice_uuid: "c142bed494804c65a7d722892aaac219",
              choice_title: "グリーンガム"
            },
            {
              choice_uuid: "c9ifaefe9b5b477ab64d04c2368d9987",
              choice_title: "BLACK BLACK"
            }
          ],
          required: true,
          sort_order: 1,
          question_type: "selectbox",
          question_uuid: "q37df325a1d544c7b194c6c3d777a1c7",
          question_title: "どのガムが好き？"
        },
        {
          choices: [
            {
              choice_uuid: "c342bed494804c65a7d722892aaac219",
              choice_title: "メビウス"
            },
            {
              choice_uuid: "cafaefe29b5b477ab64d04c2368d9987",
              choice_title: "SEVEN STAR"
            }
          ],
          required: false,
          sort_order: 1,
          question_type: "radio",
          question_uuid: "q72df325a1d544c7b194c6c3d777a1c7",
          question_title: "どのタバコが好き？"
        },
        {
          required: false,
          sort_order: 3,
          question_type: "textbox",
          question_uuid: "q08d7234276c47ffaa6314e9bd78ad4d",
          question_title: "何か要望があればどうぞ",
          choices: [{}]
        },
        {
          choices: [
            {
              choice_uuid: "c142bed494804c65a7d722892aaac219",
              choice_title: "次のライブのチケット"
            },
            {
              choice_uuid: "cafaefe29b5b477ab64d04c2368d9987",
              choice_title: "使い終わったピック"
            }
          ],
          required: true,
          sort_order: 1,
          question_type: "checkbox",
          question_uuid: "q77df325a1d544c7b194c6c3d777a1c7",
          question_title: "欲しいものは？"
        },
        {
          required: false,
          sort_order: 2,
          question_type: "textbox",
          question_uuid: "q50f66d1fc1244f7b303b4f673234e53",
          question_title: "応援メッセージをお願いします！",
          choices: [{}]
        }
      ]
    },
    confidence_setting_data: {
      confidence_setting_data: [
        {
          required: true,
          sort_order: 1,
          question_type: "full_name",
          question_uuid: "q97df325a1d544c7b194c6c3d777a1c1",
          question_title: "応募者の氏名"
        },
        {
          required: false,
          sort_order: 4,
          question_type: "full_name",
          question_uuid: "q77df325a1d544c7b194c6c3d777a1c1",
          question_title: "同行者の氏名"
        },
        {
          required: false,
          sort_order: 8,
          question_type: "address",
          question_uuid: "q77df325a1d544c7b194c6c3d777a1c2",
          question_title: "住所"
        }
      ]
    }
  },

  {
    id: 2,
    user_id: 1222,
    title: "aa",
    body: "aaaa",
    disclosure_scope: "all",
    show_status: true,
    answer_limit_status: "unlimited",
    question_data: {
      questions: [
        {
          choices: [
            {
              choice_uuid: "8142bed4-9480-4c65-a7d7-22892aaac219",
              choice_title: "次のライブのチケット"
            },
            {
              choice_uuid: "6afaefe2-9b5b-477a-b64d-04c2368d9987",
              choice_title: "使い終わったピック"
            },
            {
              choice_uuid: "9afaefe2-9b5b-477a-b64d-04c2368d9987",
              choice_title: "昔使ってたメガネ"
            }
          ],
          question_type: "checkbox",
          question_uuid: "277df325-a1d5-44c7-b194-c6c3d777a1c7",
          question_title: "欲しいものは？",
          choice_required: false
        },
        {
          question_type: "textbox",
          question_uuid: "350f66d1-fc12-44f7-b303-b4f673234e53",
          question_title: "応援メッセージをお願いします！",
          question_required: false
        },
        {
          question_type: "textbox",
          question_uuid: "408d7234-276c-47ff-aa63-14e9bd78ad4d",
          question_title: "何か要望があればどうぞ",
          question_required: false
        }
      ]
    },
    confidence_setting_data: "",
    finish_body: "",
    answer_count: 0
  }
];
// ルーティング設定
app.get("/api/v2/current_user/owner/questionnaires", (req, res) => {
  res.json(response);
});
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
