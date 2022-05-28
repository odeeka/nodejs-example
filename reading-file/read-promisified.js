const {convertCsv} = require('./csv.parse');

const fs = require('fs');

// PROMISIFIED: async without callback!
const { promisify } = require('util');

// Pass the function, not a string (consider the function name)
const readFile = promisify(fs.readFile);

// readFile("./data/pulitzer-circulation-data.csv", "utf8")
//   .then(data => console.table(convertCsv(data)))
//   .catch(error => console.log(`File error: \n${error}`));

const read = async() => {
  const data = await readFile("./data/pulitzer-circulation-data.csv","utf8");
  console.table(convertCsv(data));
};
read();