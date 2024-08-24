const express = require('express');
const path = require('node:path');
const indexRouter = require('./routers/indexRouter');

const PORT = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
