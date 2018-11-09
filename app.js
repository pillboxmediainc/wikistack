const Sequelize = require('sequelize');
// const db = new Sequelize('postgress://localhost:5432/you-db');

const express = require('express');
const routes = require('./routes/index');
const app = express();

app.use(express.static('./stylesheets'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
