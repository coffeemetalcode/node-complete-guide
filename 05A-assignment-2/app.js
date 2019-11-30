const express = require('express');

const app = express();

const PORT = process.env.PORT || 3005;

app.use('/users', (req, res, next) => {
  // console.log('/users', 'Users page');
  res.send(`
    <h1>The Users Page</h1>
  `);
});

app.use('/', (req, res, next) => {
  // console.log('/', 'Home page');
  res.send(`
    <h1>The Home Page</h1>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}!`);
});
