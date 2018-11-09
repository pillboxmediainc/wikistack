const express = require('express');
const routes = require('./routes/index');
const app = express();
const {db} = require('./models');
app.use(express.static('./stylesheets'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

db.authenticate().
then(() => {
  console.log('connected to the database');
});







const PORT = 3000;

const dbSync = async () => {
  
  try{
    await db.sync({force:true});
  } catch (err){
    console.error(err);
  }
  
  
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

dbSync()


// console.log('what is in db:' , db.models.page);

