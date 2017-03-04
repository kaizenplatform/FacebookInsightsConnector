const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.listen(port);
console.log(`Server started on ${port}...`);
