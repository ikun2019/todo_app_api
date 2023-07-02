const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(process.env.API_PORT, () => {
  console.log('Server is Running');
});