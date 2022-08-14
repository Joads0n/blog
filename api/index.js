const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 8080;

app.get('/test', (req, res) => {
    res.status(200).send();
})

app.listen(port, () => {
    console.log(`SEVER ON PORT: ${port}`)
})

module.exports = app;
