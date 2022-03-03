const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

app.listen(2000, () => console.log('Server started at http://localhost:2000'));
