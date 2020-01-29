const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res
    .status(200)
    .json({res: 'Hello World :v!'});
});

module.exports = app