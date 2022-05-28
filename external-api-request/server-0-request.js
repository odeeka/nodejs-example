const http = require('http');

const request = http.request(
  //{ hostname: 'www.netbuild.hu' },
  { hostname: 'www.google.com' },
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

request.end();
