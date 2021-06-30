const express = require('express');
const axios = require('axios');
require('dotenv').config();

const hostname = '127.0.0.1'
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/cf', (req, res, next) => {
  const path1 = 'https://codeforces.com/api/user.info?handles=popsickles';
  const path2 = 'https://codeforces.com/api/user.rating?handle=popsickles';
  const path3 = 'https://codeforces.com/api/user.status?handle=popsickles&from=1&count=20';
  const r1 = axios.get(path1);
  const r2 = axios.get(path2);
  const r3 = axios.get(path3);
  axios
    .all([r1, r2, r3])
    .then(
      axios.spread((res1, res2, res3) => {
        res.json({'info':res1.data, 'rating':res2.data, 'status':res3.data});
      })
    )
    .catch(err => {
      next(err);
    })
});

//app.get('/leetcode', (req, res, next) => {
//  //const path = 'https://leetcode.com/api/problems/algorithms';
//  const options = {
//    method: 'GET',
//    url: path,
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    auth: {
//      username:  `${process.env.LEETCODE_USER}`,
//      password: `${process.env.LEETCODE_PASS}`
//    }
//  }
//  axios(options).then(r => {
//    console.log(r.data.user_name);
//    res.json(r.data);
//  })
//  .catch(err => {
//    console.log(err);
//    next(err);
//  })
//});

app.get('/git-repos', (req, res, next) => {
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
    next(err);
  })
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).send({
    error:{
      status:err.status,
      message: err.message
    },
  });
});

app.listen(PORT, hostname, () => {
  console.log(`Server listening on ${PORT}`);
});