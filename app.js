const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res
    .status(200)
    .json({res: 'Hello Jenkins :v!'});
});
asd
module.exports = app