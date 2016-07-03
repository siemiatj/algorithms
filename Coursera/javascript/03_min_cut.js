const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

// let COUNT = 0;
let verticesObject = {};
let availableVertices = [];
let parsedLine;

lineReader.on('line', function (line) {
  parsedLine = line.split(' ');
  let vertexNo = parsedLine.shift();
  availableVertices.push(vertexNo);

  parsedLine.forEach((l, idx) => {
    parsedLine[idx] = parseInt(l, 10);
  });
  verticesObject[vertexNo] = parsedLine;

}).on('close', () => {
  console.log('Inverts in array: ', verticesObject, availableVertices);

  findMinCut(verticesObject, availableVertices);
});

let MIN_CUT = 0;

const findMinCut = function(vertices, allVertices) {
  let lengthLeft = Object.keys(vertices).length;
  if (lengthLeft === 2) {
    return;
  }

  const getEdge = function() {
    let n1 = Math.floor(Math.random() * (allVertices.length));
    let len2 = allVertices[n1].length;
    let n2 = Math.floor(Math.random() * (len2));

    n1 = parseInt(allVertices[n1], 10);

    return [n1, vertices[n1][n2]];
  };

  const getEdges = function(n) {
    return vertices[n];
  };

  const contract = function(edge) {
    let n1 = edge[0];
    let n2 = edge[1];
    let n1Edges = getEdges(n1);
    let n2Edges = getEdges(n2);
    let mergedEdges = n1Edges.concat(n2Edges);

    mergedEdges = mergedEdges.filter(e => {
      return e !== n1 && e !== n2;
    });

    vertices[n1] = mergedEdges;
    delete vertices[n2];
  };

  const removeOldVertex = function(edge) {
    for (let v in vertices) {
      let vert = vertices[v];

      vert.forEach((v, idx) => {
        if (v === edge[1]) {
          vert[idx] = parseInt(edge[0], 10);
        }
      });
    }

  };
  let edge = getEdge();

  contract(edge);
  removeOldVertex(edge);

  allVertices = allVertices.filter(k => {
    return parseInt(k, 10) !== parseInt(edge[1], 10);
  });

  // MIN_CUT +=1;
  findMinCut(vertices, allVertices);
};
