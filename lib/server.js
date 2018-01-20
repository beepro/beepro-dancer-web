"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();

var server = app.listen(3001, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function (req, res, next) {
  res.send("<h1>bbb</h1>");
});