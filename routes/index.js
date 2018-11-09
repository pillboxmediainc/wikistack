const express = require('express');
const router = express.Router();
const layout = require('../views/layout');

router.get('/', (req, res, next) => {
  res.send(layout('POTATO'));
});

module.exports = router;
