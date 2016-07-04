const fs = require('fs');
const readline = require('readline');
const path = require('path');
const RN = require('random-number');
const PATHARG = process.argv[2];
const RETRIES = parseInt(process.argv[3], 10);
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let MIN_CUTS = null;
let verticesTmpObject = {};
let verticesArray = [];
let edgesArray = [];
let parsedLine;

lineReader.on('line', function (line) {
  parsedLine = line.split(/\s+/);
  let vertexNo = parsedLine.shift();
  verticesArray.push(vertexNo);
  verticesTmpObject[vertexNo] = {};

  parsedLine.forEach((l, idx) => {
    if (parseInt(l, 10)) {
      verticesTmpObject[vertexNo][l] = true;
    }
  });
}).on('close', () => {
  // remove duplicated edges
  for (let n in verticesTmpObject) {
    for (let m of Object.keys(verticesTmpObject[n])) {
      edgesArray.push([n, m]);

      delete verticesTmpObject[m][n];
    }
  }
  let verticesCopy, allVerticesCopy;

  for (let i=0; i< RETRIES; i+= 1) {
    verticesCopy = verticesArray.slice()
    edgesCopy = edgesArray.slice();

    findMinCut(verticesCopy, edgesCopy);
  }
  console.log('Minimum cut number: ', MIN_CUTS);
});

const findMinCut = function(vertices, edges) {
  if (vertices.length === 2) {
    if (MIN_CUTS === null || (edges < MIN_CUTS)) {
      MIN_CUTS = edges.length;
    }
    return;
  }

  // remove edge and vertex at one end of this edge
  const removeEdge = function() {
    let m = RN({
      min: 0,
      max: edges.length-1,
      integer: true
    });
    let edge = edges[m];
    let n1 = edge[0];
    let n2 = edge[1];

    edges.splice(m, 1);
    vertices = vertices.filter(v => {
      return v != n2;
    });

    return [n1, n2];
  };

  const contract = function(edge) {
    let n1 = edge[0];
    let n2 = edge[1];

    edges.forEach(e => {
      if (e[0] == n2) {
        e[0] = n1;
      }
      if (e[1] == n2) {
        e[1] = n1;
      }
    });
  };

  const removeLoops = function() {
    edges = edges.filter(e => {
      return (e[0] != e[1]);
    });
  };

  let edge = removeEdge();

  contract(edge);
  removeLoops();

  findMinCut(vertices, edges);
};
