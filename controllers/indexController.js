const { v4: uuidv4 } = require('uuid');

const dummyTweets = [
  {
    id: uuidv4(),
    content: 'new york',
    author: 'kenny',
    created_at: new Date(Date.now()).toDateString(),
  },
  {
    id: uuidv4(),
    content: 'london',
    author: 'stan',
    created_at: new Date(Date.now()).toDateString(),
  },
  {
    id: uuidv4(),
    content: 'tokyo',
    author: 'kyle',
    created_at: new Date(Date.now()).toDateString(),
  },
];

const getIndex = (req, res) => {
  res.render('index', { tweets: dummyTweets });
};

const getTweetForm = (req, res) => {
  res.render('new');
};

const createTweet = (req, res) => {
  const newTweet = {
    id: uuidv4(),
    content: req.body.content,
    author: req.body.author,
    created_at: new Date(Date.now()).toDateString(),
  };

  dummyTweets.push(newTweet);

  console.log(dummyTweets);

  res.redirect('/');
};

module.exports = { getIndex, getTweetForm, createTweet };
