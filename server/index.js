const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const axios = require('axios');
const https = require('https');
const cors = require('cors');
require('dotenv').config();

const hostname = '127.0.0.1'
const PORT = process.env.PORT || 8443;
const app = express();
const privateKey = fs.readFileSync('../../../cert/localhost-cert/localhost.key');
const certificate = fs.readFileSync('../../../cert/localhost-cert/localhost.crt');
const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app);
app.use(cors());
app.use(helmet());

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status).send({
    error:{
      status:err.status,
      message: err.message
    },
  });
});

app.get('/', (req, res, next) => {
  res.send('/cf for codeforces profile info<br/> /git-repos for git projects');
});

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
        res.json({'info':res1.data.result[0], 'rating':res2.data.result, 'status':res3.data.result});
      })
    )
    .catch(err => {
      next(err);
    })
});

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

//app.listen(PORT, hostname, () => {
//  console.log(`Server listening on ${PORT}`);
//});
httpsServer.listen(PORT, hostname, ()=>{
  console.log(`Server listenin on ${PORT}`)
});