const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Clone = require('clone');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let graph = {};

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

  graph[vertexNo] = vertexEdges;
}).on('close', () => {

  console.log('LIST: ', graph);


});

const dijkstra(startNode, endNode, graphStruct) {
  // vertices processed so far
  let X = {};
  X[startNode] = {
    length: 0
  }
  
  // until X containts the end node
  let processedNode;
  while (!X[endNode]) {
    processedNode = runDijkstra(X, graphStruct);
  }
}

const runDijkstra(processedNodes, graphStruct) {
  let 
  for (let vertex in processedNodes) {
    
  }
}
