const axios = require('axios');
const fs = require('fs');

// WITHOUT STREAM
axios.get('https://www.google.com')
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.error(error);
})

