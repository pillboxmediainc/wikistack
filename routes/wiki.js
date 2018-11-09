const models = require('../models/index');
const wikiRouter = require('express').Router();
const addPage = require('../views/addPage');

wikiRouter.get('/', (req, res, next) => {
  res.redirect('/');
});

wikiRouter.post('/', async (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let title = req.body.title;
  let content = req.body.content;
  let status = req.body.status;

  try {
    const page = await models.Page.create({
      title: title,
      content: content,
      status: status,
      // slug: slug,
    });

    const user = await models.User.create({
      name: name,
      email: email,
    });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

wikiRouter.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
