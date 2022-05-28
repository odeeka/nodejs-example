const fs = require("fs");

console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd);
  //fs.closeSync(fd);
  fs.close(fd, () => {});
}

// OS limit for opened file count

// readFile and readFileSync close the files automatically if file / URL or path given, if 'fd' not close!!!
// readFile('data.csv', 'utf8', (err, data) => {}); // close
// readFile(fd, 'utf8', (err, data) => {}); // NOT close

// ANY TIME YOU HAVE A FILE DESCRIPTOR, YOU ARE RESPONSIBLE FOR CLOSING THE FILE!!!