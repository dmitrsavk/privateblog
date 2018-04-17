const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3001;

const router = express.Router();
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://privateblog.ru');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});