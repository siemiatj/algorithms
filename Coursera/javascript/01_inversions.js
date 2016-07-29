const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});
const countInversions = require('./lib/count_inversions').countInversions;
const invertsArray = [];

lineReader.on('line', (line) => {
  invertsArray.push(parseInt(line, 10));
}).on('close', () => {
  const count = countInversions(invertsArray);
  console.log('Inverts in array: ', count);
});
