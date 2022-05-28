const { createReadStream } = require('fs');

// Default size is 64kB for stream (buffer)
const stream = createReadStream('./data/app.log', {
  highWaterMark: 9550,
  encoding: "utf8"
});

stream.on('data', data => {
  stream.pause();
  console.log(data);

  setTimeout(() => {
    stream.resume();
  }, 1000);

});


