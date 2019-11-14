import Express from "express";

const app = Express();

app.get("/", (req, res) => {
  const data = { hoge: "ほげ" };
  res.send(data);
});

const PORT = 8888;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Running http://${HOST}:${PORT}`);
});
