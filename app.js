const express = require('express');
const indexRouter = require('./routers/indexRouter');

const PORT = 3000;

const app = express();

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
