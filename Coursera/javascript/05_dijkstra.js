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
  let newLength;
  let vertex;
  let node;
  let bestNode = null;

  for (vertex of Object.keys(processedNodes)) {
    currentLevel = graphStruct[vertex];
    currentLength = processedNodes[vertex].length || 0;

    // console.log('VERTEX: ', vertex, currentLength, Object.keys(processedNodes));

    for (node of Object.keys(currentLevel)) {
      if (processedNodes[node]) {
        continue;
      }

      // console.log('EDGE: ', node, graphStruct[vertex][node]);
      // newLength = currentLength + currentLevel[node];
      // if (!bestLength) {
      if (bestLength === null || bestLength > (currentLength + currentLevel[node])) {
        // bestLength = newLength;
        // bestNode
        bestLength = currentLength + currentLevel[node];
        bestNode = node;
      }
      // } else {
      //   bestLength = newLength < bestLength ? newLength : bestLength;
      // }

      // console.log('NODE: ', node, bestLength, bestNode);

      // let lastNodeInPath = vertex.path[vertex.path.length - 1];

      // if (node !== lastNodeInPath && )
      // processedNodes[bestNode] = {
      //   length: bestLength
      // };
    }

    // processedNodes[bestNode].length = bestLength || 0;
  }

  processedNodes[bestNode] = {
    length: bestLength
  };

  return;
  // return {
  //   node: bestNode,
  // }
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

  // console.log('X: ', processedVertices);
  return processedVertices[endNode];
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
  // console.log('LIST: ', graph);

  // console.log(dijkstra(8, 2, graph));
  // console.log(dijkstra(6, 4, graph));
  // console.log(dijkstra(5, 4, graph));
  console.log(dijkstra(1, 7, graph));
  // console.log('GRAPH: ', graph);
});
