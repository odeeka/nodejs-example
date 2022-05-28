const axios = require('axios');
const fs = require('fs');

let i = 0
// WITH MULTIPLE CONCURRENT REQUESTS
axios.all([
  axios.get('http://localhost:8080/metadata?id=1'),
  axios.get('http://localhost:8080/metadata?id=1')
])
.then((responseArray) => {
  
  //console.log(i + ": " + responseArray[0].data.description);
  //i++
  //console.log(i + ": " + responseArray[1].data.description); 

  responseArray.forEach(element => {
    i++
    console.log(i + ": " + element.data.description);
  });
})