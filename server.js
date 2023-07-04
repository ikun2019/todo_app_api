const express = require('express');
const cors = require('cors');
// const sequelize = require('./config/db');
const { sequelize } = require('./models');

// Routerのインポート
const postsRouter = require('./routers/posts.router');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// Routerのマウント
app.use('/', postsRouter);

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