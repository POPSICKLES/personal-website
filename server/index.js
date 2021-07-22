const path = require('path');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const axios = require('axios');
const https = require('https');
require('dotenv').config();

//const hostname = '127.0.0.1'
const PORT = process.env.PORT || 5000;
const app = express();
var privateKey = null;
var certificate = null;
try {
  privateKey = fs.readFileSync('../../cert/localhost-cert/localhost.key');
  certificate = fs.readFileSync('../../cert/localhost-cert/localhost.crt');
} catch(err) {
  privateKey = null;
  certificate = null;
}
var httpsServer = null;
if(privateKey !== null)
  httpsServer = https.createServer({key: privateKey, cert: certificate }, app);
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
}));

app.use(express.static(path.resolve(__dirname, 'client/build')));


app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    status: err.status || 500,
    error: err.message || 'Internal Server Error'
  })
});
app.get('/api/cf', (req, res, next) => {
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
        res.json({'info':res1.data.result[0], 'rating':res2.data.result, 'status':res3.data.result});
      })
    )
    .catch(err => {
      next(err);
    })
});

app.get('/api/git-repos', (req, res, next) => {
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

app.get('/*', (req, res, next) =>{
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

if(httpsServer !== null){
  httpsServer.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
  });
}
else{
  app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
  })
}