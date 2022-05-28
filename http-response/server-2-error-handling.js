const http = require('http');
const services = require('../services');
const url = require('url');
const jsonBody = require('body/json');
const fs = require('fs');

const server = http.createServer();

server.on('request', (request, response) => {

  request.on('error', (err) => {
    console.error('request error');
  });

  response.on('error', (err) => {
    console.error('response error');
  });
  const parsedUrl = url.parse(request.url, true);

  if (request.method === 'GET' && parsedUrl.pathname === '/metadata'){

    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
    
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    const serializedJSON = JSON.stringify(metadata);
    response.write(serializedJSON);
    response.end();
    
  } else if (request.method == 'POST' && parsedUrl.pathname === '/users'){

    // Sample query to POST: curl -H Content-Type:application/json --request POST --data '{"userName":"odeeka"}' http://localhost:8080/users
    jsonBody(request, response, (err, body) => {
      if (err) {
        console.log(err);
      } else {
        services.createUser(body['userName']);
      }
    });

  } else {

    // Sample query: curl -i http://localhots:8080/hello
    // We can write manual the Head with this statment and not the Node change it
    response.writeHead(404, {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node',
      'Hello': 'World'
    });
    response.end();
  }

});

server.listen(8080);
