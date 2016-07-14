const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Clone = require('clone');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let weightedAdjList = {};

lineReader.on('line', function (line) {
  /*
   * Preprocessing input data
   */
  let parsedLine = line.split(/\s+/);
  let vertexNo = parsedLine.shift();
  let vertexEdges = {};
  let vertex, value;

  parsedLine.forEach((l) => {
    if (parseInt(l, 10)) {
      [vertex, value] = l.split(',');
      vertexEdges[vertex] = parseInt(value, 10);
    }
  });

  weightedAdjList[vertexNo] = vertexEdges;
}).on('close', () => {

  console.log('LIST: ', weightedAdjList);
});