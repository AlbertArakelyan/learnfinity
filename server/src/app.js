const path = require('path');
const express = require('express');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

app.use(cors({}));

app.use(express.json({ limit: '50mb' }));

app.use('/api', api);

app.use('/storage', express.static('storage'));

// app.get('/', (req, res) => {
//   res.send('<h1>Hello Learnfinity!</h1>');
// });

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;