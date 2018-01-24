'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();

var server = app.listen(3001, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/honeys/1", function (req, res, next) {
  _axios2.default.get("http://localhost:3000/api/honeys/1", {}).then(function (response) {
    res.send(response);
  }).catch(function (error) {
    console.log(error);
  });
});

app.get("/", function (req, res, next) {
  "wss://localhost/ws/honeys/:id";

  _axios2.default.post("http://localhost:3000/api/honeys", {
    "git": {
      "url": "https://github.com/beepro/beepro-test-repository.git",
      "branch": "master"
    },
    "commit": {
      "message": "beepro making commit",
      "interval": 1
    }
  }).then(function (response) {
    console.log(111);
    console.log(response);
    console.log(response.status);
    console.log(response.data);
    console.log(222);
    res.send();
  }).catch(function (error) {
    console.log(error);
  });
  res.send("<h1>bbb</h1>");
});
