const axios = require('axios');
const fs = require('fs');

// WITH STREAM
axios({
  method: 'post',
  url: 'http://localhost:8080/users',
  data: {
    //userNames: ['odeeka-1', 'odeeka-2', 'odeeka-3']
    userName: 'oddeka'
  },
  transformRequest: (data, headers) => {
    // const newData = data.userNames.map((userName) => {
    //   return userName + '!';
    // });
    const newData = {
      userName: data.userName + '!'
    }
    return JSON.stringify(newData);
  }
})
.then((response) => {
  response.data.pipe(fs.createWriteStream('google.html'))
})
.catch((error) => {
  console.error(error);
})