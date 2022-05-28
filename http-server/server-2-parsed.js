const http = require('http');
const { parse } = require('path');
const server = http.createServer();
const services = require('../services');

const url = require('url');

server.on('request', (request, response) => {

  console.log(request.method, request.url);
  
  const parsedUrl = url.parse(request.url, true);
  
  console.log(parsedUrl);

  // Sample query 1: curl localhost:8080/metadata?id=125
  // Sample query 2: curl -H "Authorization: Bearer 12345" localhost:8080/metadata?id=125
  if (request.method === 'GET' && parsedUrl.pathname === '/metadata'){
    const { id } = parsedUrl.query;
    console.log(id);
    //console.log(request.headers);
  }

  // Sample query: curl -H Content-Type:application/json --request POST --data @MOCK_DATA.json http://localhost:8080
  const body = [];
  request.on('data', (chunk) => {
    //console.log('this is a chunk\n');
    //console.log(chunk.toString());
    body.push(chunk);
  }).on('end', () => {
    console.log('Finished json push');
    //console.log(body);
    const parsedJSON = JSON.parse(Buffer.concat(body));
    const userName = parsedJSON[0]['userName'];
    console.log(userName);
    services.createUser(userName);
  });
});

server.listen(8080);
