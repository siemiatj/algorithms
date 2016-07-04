const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let MIN_CUTS = null;
// let verticesObject = {};
// let availableVertices = [];
let verticesArray = [];
let edgesArray = [];
let parsedLine;

lineReader.on('line', function (line) {
  parsedLine = line.split(/\s+/);
  let vertexNo = parsedLine.shift();
  verticesArray.push(vertexNo);

  parsedLine.forEach((l, idx) => {
    // parsedLine[idx] = parseInt(l, 10);
    edgesArray.push([vertexNo, l]);
  });
  // verticesObject[vertexNo] = parsedLine;

}).on('close', () => {
  let verticesCopy, allVerticesCopy;

  for (let i=0; i< 2; i+= 1) {
    verticesCopy = Object.assign({}, verticesObject);
    allVerticesCopy = availableVertices.slice());

    findMinCut(verticesCopy, allVerticesCopy);
  }
  console.log('Minimum cut number: ', MIN_CUTS);
});

const findMinCut = function(vertices, allVertices) {
  // console.log('DATA: ', vertices, allVertices);
  let lengthLeft = Object.keys(vertices).length;
  if (lengthLeft === 2) {
    let vertex1 = allVertices[0];

    // console.log('VERTEX: ', vertex1, allVertices, vertices);

    if (MIN_CUTS === null || (vertices[vertex1].length < MIN_CUTS)) {
      MIN_CUTS = vertices[vertex1].length;
    }
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
