import Express from "express";
import uuidv4 from "uuid/v4";

const app = Express();

// リクエスト解析(body-parser)
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

type Response = { id: string; title: string };

const response: Response[] = [
  { id: "5d8348d1-c142-4b6c-afa9-dc520a9893a7", title: "あああ" }
];
// ルーティング設定
app.get("/api/v1/hoge", (req, res) => {
  res.json(response);
});
app.post("/api/v1/hoge", (req, res) => {
  const reqBody = req.body;
  const title = reqBody.title;
  const id = uuidv4();
  const data = {
    id,
    title
  };
  response.push(data);
  console.log(`post success!! ${JSON.stringify(response)}`);
  res.json(data);
});

const PORT = 8080;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Running http://${HOST}:${PORT}`);
});
