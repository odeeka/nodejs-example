const { createReadStream } = require('fs');

const stream = createReadStream('./data/app.log');

stream.on('data', data => console.log(data));

// Default size is 64kB for stream (buffer)
