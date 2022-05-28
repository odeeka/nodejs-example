const {convertCsv} = require('../csv.parse');

const {readFile} = require("fs");

module.exports.read = () => {
  //readFile("./data/pulitzer-circulation-data.csv", (err, data) => {     // without encoding the readFile give back buffer
  readFile("../data/pulitzer-circulation-data.csv", "utf8", (err, data) => {
    if(err){
          console.log(`There was a problem with the file: \n${err}`);
          return;
      } else {

        //console.log(data);  // give back the Buffer bytes without encoding, Buffer doesn't have split function

        const vals = convertCsv(data);
        //const vals = data;

        console.table(vals);
      }

  });

}
