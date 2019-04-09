const express = require('express');
const router = require('./router');
const port = 8080;
const app = express();

app.use('/', router);

app.listen(port, () => console.log(`Server is listneing to ${port}`));
