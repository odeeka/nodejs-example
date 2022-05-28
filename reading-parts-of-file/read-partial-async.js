const { convertCsv } = require('./csv.parse');
const { open, read} = require('fs');

// fd: file descriptor - identifier to access the file after open
open('./data/pulitzer-circulation-data.csv', (error, fd) => {
  
  const buffer = Buffer.alloc(200);

  // read(what file to read from, where to store the data, Buffer location, How much to read, File starting point)
  read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });

});