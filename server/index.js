const express = require('express');
const axios = require('axios');
require('dotenv').config();

const hostname = '127.0.0.1'
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/repos', (req, res) => {
  const path = 'https://api.github.com/user/repos';
  const options = {
    method: 'GET',
    url: path,
    headers: {
      Authorization: `token ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    }
  }
  axios(options).then(r => {
    res.json(r.data);
  })
  .catch(err => {
    console.log(err);
    res.json({});
  })
});
app.get('/git-repos', (req, res) => {
  const path = 'https://api.github.com/user/repos';
  const options = {
    method: 'GET',
    url: path,
    headers: {
      Authorization: `token ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    }
  }
  axios(options).then(r => {
    res.json(r.data);
  })
  .catch(err => {
    console.log(err);
    res.json({});
  })
});

app.listen(PORT, hostname, () => {
  console.log(`Server listening on ${PORT}`);
});