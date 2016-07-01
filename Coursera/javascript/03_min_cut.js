const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

// let COUNT = 0;
let verticesArray = [];
let parsedLine;

lineReader.on('line', function (line) {
  let tmpObj = {};
  parsedLine = line.split(' ');
  let vertexNo = parsedLine.shift();

  parsedLine.forEach((l, idx) => {
    parsedLine[idx] = parseInt(l, 10);
  });
  tmpObj[vertexNo] = parsedLine;

  verticesArray.push(tmpObj);
}).on('close', () => {
  console.log('Inverts in array: ', verticesArray);
});

