const express = require('express');
const router = express.Router();
const layout = require('../views/layout');
const userRouter = require('./users');
const wikiRouter = require('./wiki');

router.get('/', (req, res, next) => {
  res.send(layout(''));
});

router.use('/users', userRouter);
router.use('/wiki', wikiRouter);

module.exports = router;
