// const Sequelize = require('sequelize');
const models = require('../models/index');
const userRouter = require('express').Router();
const addPage = require('../views/addPage');

userRouter.get('/', async (req, res, next) => {
  console.log('test');
  const allUsers = await models.User.findAll(names);

  res.send(allUsers);
});

userRouter.get('/:userid', (req, res, next) => {
  res.send('');
});

userRouter.post('/', (req, res, next) => {
  res.send('post something');
});

userRouter.get('/add', (req, res, next) => {
  res.send();
});

module.exports = userRouter;
