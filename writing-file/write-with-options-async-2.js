const { constants, writeFile } = require('fs');

// async - writeFile(name, data, option, callback)
// default option flag - write
// flags: r (read), w (write), a (append)
// extended flags: x (exclusive), + (multiple modes), s (synchronous)
// r+ (read and write mode), rs+ (read and write synchronously)
// wx (exclusive write - throw error if file exists)
// w+ (read and write mode)
// wx+ (exclusive read and write and throw error if file exists)

writeFile('./data/newapp.log',
  '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
  //{mode: constants.S_IWUSR | constants.S_IRUSR}, // S_IRUSR - 0o400 (Read by Owner), S_IWUSR - 0o200 (Write by Owner)
  //{mode: 0o600 }, // 0o600 rw permission for user
  { encoding: 'base64' }, // ascii, uft16le, ucs2, utf8, base64, latin1 or binary, hex
  (err) => {
    err ? console.log(err) : console.log("file saved!");
  });
