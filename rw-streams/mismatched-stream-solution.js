// Input stream is faster than output stream
// Error: JavaScript heap out of memory!!


const { createReadStream, createWriteStream, write } = require('fs');

const stream = createReadStream('./data/big_stream.log', {
  encoding: "utf8"
});

const writer = createWriteStream("./data/output.log");

stream.pipe(writer);

// let iteration = 0;

// stream.on('data', data => {

//   console.log(++iteration);

//   writer.write(data);

// });

// const writeData = data => {
//   setTimeout(() => {
//     writer.write(data);
//   }, 60000);
// }
