  
/* eslint-disable no-console */
const express = require('express');
const { sleep } = require('sleep');
const port = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/intense', (req, res) => {
  sleep(5); // ARTIFICIAL CPU INTENSIVE
  res.send('Hello Intense!');
});
app.listen(port, () => console.log('Example app listening on port !'));