import Express from 'express';

const app = new Express();

const server = app.listen(3001, () => {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", (req, res, next) => {
  res.send("<h1>bbb</h1>");
});
