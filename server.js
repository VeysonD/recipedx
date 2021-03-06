const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 4200;
const SERVER = process.env.SERVER || 'https://127.0.0.1';

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(PORT);
console.log(`Server is listening at ${SERVER}:${PORT}`);
