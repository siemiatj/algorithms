const fs = require('fs');
const readline = require('readline');
const path = require('path');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

const runDijkstra = function (processedNodes, graphStruct) {
  let currentLength;
  let currentLevel;
  let bestLength = null;
  let vertex;
  let node;
  let bestNode = null;

  for (vertex of Object.keys(processedNodes)) {
    currentLevel = graphStruct[vertex];
    currentLength = processedNodes[vertex].length || 0;

    for (node of Object.keys(currentLevel)) {
      if (processedNodes[node]) {
        continue;
      }

      if (bestLength === null || bestLength > (currentLength + currentLevel[node])) {
        bestLength = currentLength + currentLevel[node];
        bestNode = node;
      }
    }
  }

  processedNodes[bestNode] = {
    length: bestLength
  };
};

const dijkstra = function (startNode, endNode, graphStruct) {
  // vertices processed so far
  const processedVertices = {};
  processedVertices[startNode] = {
    length: 0
  };

  // until processedVertices containts the end node
  while (!processedVertices[endNode]) {
    runDijkstra(processedVertices, graphStruct);
  }

  return processedVertices[endNode];
};

const graph = {};
lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedLine = line.split(/\s+/);
  const vertexNo = parsedLine.shift();
  const vertexEdges = {};
  let vertex;
  let value;

  parsedLine.forEach((l) => {
    if (parseInt(l, 10)) {
      [vertex, value] = l.split(',');
      vertexEdges[vertex] = parseInt(value, 10);
    }
  });

  graph[vertexNo] = vertexEdges;
}).on('close', () => {
  console.log('7:' + dijkstra(1, 7, graph).length);
  console.log('37:' + dijkstra(1, 37, graph).length);
  console.log('59:' + dijkstra(1, 59, graph).length);
  console.log('82:' + dijkstra(1, 82, graph).length);
  console.log('99:' + dijkstra(1, 99, graph).length);
  console.log('115:' + dijkstra(1, 115, graph).length);
  console.log('133:' + dijkstra(1, 133, graph).length);
  console.log('165:' + dijkstra(1, 165, graph).length);
  console.log('188:' + dijkstra(1, 188, graph).length);
  console.log('197:' + dijkstra(1, 197, graph).length);
});
