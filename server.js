const express = require('express');
const bodyParser = require('body-parser');
const asyncMiddleware = require('./lib/asyncMiddleware');
const app = express();
const port = 8000;

// load environment variables
require('dotenv').config();

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', asyncMiddleware(require('./index')));
app.get('/generate', asyncMiddleware(require('./generate/index')));
app.use('/site/vendor', express.static('site/vendor'));
app.use('/site/scripts', express.static('site/scripts'));
app.use('/site/styles', express.static('site/styles'));
app.use('/site/images', express.static('site/images'));
//app.use('/site/404.html', express.static('site/404.html'));
app.use('/dist', express.static('dist'));
app.get('*', express.static('site/404.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
