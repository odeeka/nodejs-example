const axios = require('axios');
const fs = require('fs');

let i = 0

const getMetadata = () => {
  return axios.get('http://localhost:8080/metadata?id=1')
}

const getMetadataAgain = () => {
  return axios.get('http://localhost:8080/metadata?id=1')
}

// WITH MULTIPLE CONCURRENT REQUESTS
axios.all([
  getMetadata(),
  getMetadataAgain()
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