const http = require('http');

const data = JSON.stringify({
  userName: 'odeeka'
})

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/users',
  method: 'POST',
  //method: 'PUT',
  //method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const request = http.request(
  options,
  (response) => {
    console.log(`statusCode: ${response.statusCode}`);
    console.log(response.headers);

    response.on('data', (chunk) => {
      console.log('this is a chunk: \n');
      console.log(chunk.toString());
    });
  }
);

request.on('error', (err) => {
  console.error(err);
});

request.write(data);

request.end();