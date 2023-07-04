const express = require('express');
const cors = require('cors');
const multer = require('multer');
// const sequelize = require('./config/db');
const { sequelize } = require('./models');

// Routerのインポート
const postsRouter = require('./routers/posts.router');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// multerの設定
const upload = multer();
app.use(upload.none());

// Routerのマウント
app.use('/', postsRouter);

sequelize
  .sync()
  // .sync({ force: true })
  .then(result => {
    app.listen(process.env.API_PORT, () => {
      console.log(`Server is running PORT:${process.env.API_PORT}`)
    });
  })
  .catch(err => {
    console.error(err);
  })