const { Router } = require('express');
const indexController = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', indexController.getIndex);
indexRouter.get('/tweet/:id', indexController.getTweet);
indexRouter.get('/new', indexController.getTweetForm);
indexRouter.post('/new', indexController.createTweet);

module.exports = indexRouter;
