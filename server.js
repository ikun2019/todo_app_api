const express = require('express');
const sequelize = require('./config/db');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

sequelize
  .sync()
  .then(result => {
    app.listen(process.env.API_PORT, () => {
      console.log(`Server is running PORT:${process.env.API_PORT}`)
    });
  })
  .catch(err => {
    console.error(err);
  })