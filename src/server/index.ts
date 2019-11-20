import Express from "express";

const app = Express();

// リクエスト解析(body-parser)
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// ルーティング設定
const router = Express.Router();
router.get("/api/v1/hoge", (req, res) => {
  res.send(req.query);
});
router.post("/api/v1/hoge", (req, res) => {
  res.send(req.body);
});
app.use(router);

const PORT = 8080;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Running http://${HOST}:${PORT}`);
});
