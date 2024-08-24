const dummyTweets = [
  {
    id: 1,
    content: 'new york',
    author: 'kenny',
    created_at: Date.now(),
  },
  {
    id: 1,
    content: 'london',
    author: 'stan',
    created_at: Date.now(),
  },
  {
    id: 1,
    content: 'tokyo',
    author: 'kyle',
    created_at: Date.now(),
  },
];

const getIndex = (req, res) => {
  res.render('index', { tweets: dummyTweets });
};

module.exports = { getIndex };
