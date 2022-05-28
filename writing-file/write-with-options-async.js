const { writeFile } = require('fs');

// async - writeFile(name, data, option, callback)
// default option flag - write
// flags: r (read), w (write), a (append)
// extended flags: x (exclusive), + (multiple modes), s (synchronous)
// r+ (read and write mode), rs+ (read and write synchronously)
// wx (exclusive write - throw error if file exists)
// w+ (read and write mode)
// wx+ (exclusive read and write and throw error if file exists)

writeFile('./data/app.log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
  {flag: 'wx'}, //exclusive write - error if file exists
  (err) => {
    err ? console.log(err) : console.log("file saved!");
  });

