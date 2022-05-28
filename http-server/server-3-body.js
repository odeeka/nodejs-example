const http = require('http');
const services = require('../services');
const url = require('url');

// https://www.npmjs.com/package/body
//const textBody = require('body');
const jsonBody = require('body/json');
//const formBody = require('body/form');
//const anyBody = require('body/any');

const server = http.createServer();

server.on('request', (request, response) => {

  const parsedUrl = url.parse(request.url, true);
  console.log(parsedUrl);

  if (request.method === 'GET' && parsedUrl.pathname === '/metadata'){
    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
    console.log(request.headers);
  } else if (request.method == 'POST' && parsedUrl.pathname === '/users'){

    // Sample query to POST: curl -H Content-Type:application/json --request POST --data '{"userName":"odeeka"}' http://localhost:8080/users
    jsonBody(request, response, (err, body) => {
      if (err) {
        console.log(err);
      } else {
        services.createUser(body['userName']);
      }
    });

  }

});

server.listen(8080);
