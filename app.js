const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/users', (req, res, next) => {
  res.send(`
    <h1>Users Page</h1>
  `);
});

app.use('/', (req, res, next) => {
  res.send(`
    <h1>Hello from Express.js!</h1>
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});