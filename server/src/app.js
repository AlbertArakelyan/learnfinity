const path = require('path');
const express = require('express');

const api = require('./routes/api');

const app = express();

app.use(express.json({ limit: '50mb' }));

app.use('/api', api);

app.use('/storage', express.static('storage'));

app.get('/', (req, res) => {
  res.send('<h1>Hello Learnfinity!</h1>');
});

module.exports = app;