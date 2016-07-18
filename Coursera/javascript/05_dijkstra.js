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

  dijkstra(8, 2, graph);
});

const dijkstra = function (startNode, endNode, graphStruct) {
  // vertices processed so far
  let X = {};
  X[startNode] = {
    length: 0,
    path: []
  };

  // until X containts the end node
  let processedNode;
  while (!X[endNode]) {
    processedNode = runDijkstra(X, graphStruct);
  }

  return X[startNode];
};

const runDijkstra = function (processedNodes, graphStruct) {
  let currentLength,
    currentLevel,
    bestLength,
    // bestNode
    newLength;

  for (let vertex in processedNodes) {
    currentLevel = graphStruct[vertex];
    currentLength = vertex.length || 0;

    for (let node in currentLevel) {
      if (processedNodes[node]) {
        continue;
      }

      newLength = currentLength + currentBranch[node];
      if (!bestLength) {
        bestLength = newLength;
      } else {
        bestLength = newLength < bestLength ? newLength : bestLength;
      }

      // let lastNodeInPath = vertex.path[vertex.path.length - 1];

      // if (node !== lastNodeInPath && )
      processedNodes[node] = bestLength;
    }

    processedNodes[vertex].length = bestLength;
  }
};
