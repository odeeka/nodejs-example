const { writeFile } = require('fs');

// async - writeFile(name, data, option, callback)
// default option flag - write
writeFile('./data/app.log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
  {flag: 'a'},
  (err) => {
    err ? console.log(err) : console.log("file saved!");
  });
