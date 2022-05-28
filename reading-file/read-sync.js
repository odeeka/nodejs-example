const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');


// IMPORTANT: synchronous code is blocking!

try {

  const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");

  console.table(convertCsv(data));

} catch (error) {
  console.log(`Error with files: \n${error}`);
}