const http = require('http');
const { parse } = require('path');
const server = http.createServer();
const services = require('../services');

const url = require('url');

server.on('request', (request, response) => {
  console.log('this is an incoming request');
  
  //console.log(request);
  console.log(request.method, request.url);
  
  const parsedUrl = url.parse(request.url, true);
  
  console.log(parsedUrl);

  // Sample query 1: curl localhost:8080/metadata?id=125
  // Sample query 2: curl -H "Authorization: Bearer 12345" localhost:8080/metadata?id=125
  if (request.method === 'GET' && parsedUrl.pathname === '/metadata'){
    const { id } = parsedUrl.query;
    console.log(id);
    console.log(request.headers);

    const metadata = services.fetchImageMetadata(id);
    console.log(metadata);
  }

});

server.listen(8080);
