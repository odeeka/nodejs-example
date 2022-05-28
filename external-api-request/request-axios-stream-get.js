const axios = require('axios');
const fs = require('fs');

// WITH STREAM
axios({
  method: 'get',
  url: 'http://www.google.com',
  responseType: 'stream'
})
.then((response) => {
  response.data.pipe(fs.createWriteStream('google.html'))
})
.catch((error) => {
  console.error(error);
})