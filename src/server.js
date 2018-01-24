import Express from 'express';
import axios from 'axios';

const app = new Express();

const server = app.listen(3001, () => {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/honeys/1/edit", (req, res, next) => {
  res.render({"data": response.data});
});

app.get("/honeys/1", (req, res, next) => {
  const url = "http://localhost:5432/api/honeys/28ddef3bc13ff0688e077e1f9433e8fba014ca8026a002550a4adbdda4798294";
  axios.get(url).then((response) => {
    console.log(url);
    res.json({"data": response.data});
  }).catch(error => {
    console.log(error);
  });
});

app.get("/honeys", (req, res, next) => {
  "wss://localhost/ws/honeys/:id";
  axios.post("http://localhost:5432/api/honeys", {
    "git": {
      "url": "https://github.com/beepro/beepro-test-repository.git",
      "branch": "master"
    },
    "commit": {
      "message": "beepro making commit",
      "interval": 1
    }
  })
  .then((response) => {
    res.json({"data": response.data});
  }).catch(error => {
    console.log(error);
  });
});
