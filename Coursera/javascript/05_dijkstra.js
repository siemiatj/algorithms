const fs = require('fs');
const readline = require('readline');
const path = require('path');
// const Clone = require('clone');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

const runDijkstra = function (processedNodes, graphStruct) {
  let currentLength;
  let currentLevel;
  let bestLength;
    // bestNode
  let newLength;
  let vertex;
  let node;

  for (vertex in processedNodes) {
    currentLevel = graphStruct[vertex];
    currentLength = vertex.length || 0;

    for (node in currentLevel) {
      if (processedNodes[node]) {
        continue;
      }

      newLength = currentLength + currentLevel[node];
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

const dijkstra = function (startNode, endNode, graphStruct) {
  // vertices processed so far
  const X = {};
  X[startNode] = {
    length: 0,
    path: []
  };

  // until X containts the end node
  while (!X[endNode]) {
    runDijkstra(X, graphStruct);
  }

  return X[startNode];
};

const graph = {};
lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedLine = line.split(/\s+/);
  const vertexNo = parsedLine.shift();
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

  // console.log(dijkstra(8, 2, graph));
  console.log(dijkstra(6, 4, graph));
  // console.log(dijkstra(5, 4, graph));
});
