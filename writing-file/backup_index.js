module.exports.asynchronousReadChunk = require('../reading-parts-of-file/read-chunk-async').read;
module.exports.asynchronousRead = require('../reading-file/read-async').read;
module.exports.asynchronousReadPartial = require('../reading-parts-of-file/read-partial-async').read;
module.exports.promisifiedRead = require('../reading-file/read-promisified').read;
module.exports.synchronousRead = require('../reading-file/read-sync').read;
module.exports.synchronousReadPartial = require('../reading-parts-of-file/read-partial-sync').read;
