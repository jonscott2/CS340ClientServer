'use strict';

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, '..', '..', 'client', 'src')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'src', 'Services.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

