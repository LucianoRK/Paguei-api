const express = require('express');
require('dotenv').config();

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, HOST);