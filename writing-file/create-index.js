const { closeSync, openSync, readdirSync, watch, writeSync } = require("fs");
const camelCase = require("camelcase");

watch("./read", () => {

  // Open file with write mode
  const indexFd = openSync("./index.js", "w");


  const files = readdirSync("./read");

  files.map(f => {
    const name = f.replace(".js", "");
    console.log(`Adding a file: ${f}`);

    writeSync(
      indexFd,
      `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`
    );
  });

  // Close file (descriptor)
  closeSync(indexFd);
});