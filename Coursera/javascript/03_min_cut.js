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
  // let tmpObj = {};
  parsedLine = line.split(' ');
  let vertexNo = parsedLine.shift();
  availableVertices.push(vertexNo);

  parsedLine.forEach((l, idx) => {
    parsedLine[idx] = parseInt(l, 10);
  });
  verticesObject[vertexNo] = parsedLine;

  // verticesArray.push(tmpObj);
}).on('close', () => {
  console.log('Inverts in array: ', verticesObject, availableVertices);

  findMinCut(verticesObject, availableVertices);
});

let MIN_CUT = 0;

const findMinCut = function(vertices, allVertices) {
  // let lengthLeft = Object.keys(vertices).length;
  // console.log('Object.keys', Object.keys({1: 2}));
  // if (array.length < 3) {
  if (MIN_CUT > 3) {
    return;
  }
  const getEdge = function() {
    let n1 = Math.floor(Math.random() * (allVertices.length));
    let len2 = allVertices[n1].length;
    let n2 = Math.floor(Math.random() * (len2));

    console.log('N!', n1, ', N2', n2);

    return [n1+1, vertices[n1+1][n2]];
  };

  const getEdges = function(n) {
    // let edges = [].concat.apply([], ar.splice(n-1, 1));

    // edges.shift();


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

    console.log('EDGES: ', n1Edges, n2Edges, mergedEdges);
    // n2Edges.shifti();
    //remove n1 and n2 from merged vertices
    //remove n2 from all other vertices edges, replacing it with n1 (only if not
    //already there)

    // console.log('n2edges: ', n2Edges);
    vertices[n1] = mergedEdges;
    delete vertices[n2];
  };

  const removeOldVertex = function(edge) {
    console.log('BEFORE: ', vertices);
    // for (let vert of Object.values(vertices)) {
    for (let v in vertices) {
      let vert = vertices[v];

      vert.forEach((v, idx) => {
        if (v === edge[1]) {
          vert[idx] = edge[0];
        }
      });
    }

    console.log('AFTER: ', vertices);
  };
  let edge = getEdge();
  console.log('EDGE: ', edge);

  contract(edge);
  removeOldVertex(edge);

  allVertices = allVertices.filter(k => {
    return k !== edge[1];
  });

  MIN_CUT +=1;
  findMinCut(vertices, allVertices);
};
