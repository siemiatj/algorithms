const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

// let COUNT = 0;
let verticesArray = [];
let parsedLine;

lineReader.on('line', function (line) {
  // let tmpObj = {};
  parsedLine = line.split(' ');
  // let vertexNo = parsedLine.shift();

  parsedLine.forEach((l, idx) => {
    parsedLine[idx] = parseInt(l, 10);
  });
  // tmpObj[vertexNo] = parsedLine;

  verticesArray.push(parsedLine);
}).on('close', () => {
  console.log('Inverts in array: ', verticesArray);

  findMinCut(verticesArray);
});

let MIN_CUT = 0;

const findMinCut = function(array) {
  console.log('Object.keys', Object.keys({1: 2}));
  // if (array.length < 3) {
  if (MIN_CUT > 3) {
    return;
  }
  const getEdge = function(ar) {
    let n1 = Math.floor(Math.random() * (ar.length -1)) + 1;
    let len2 = ar[n1].length;
    let n2 = Math.floor(Math.random() * (len2 - 1)) + 1;

    console.log('N!', n1, ', N2', n2);

    return [array[n1][0], array[n1][n2]];
  };

  const getEdges = function(ar, n) {
    let edges = [].concat.apply([], ar.splice(n-1, 1));

    edges.shift();

    return edges;
  };

  const contract = function(ar, edge) {
    let n1 = edge[0];
    let n2 = edge[1];
    let n1Edges = getEdges(ar, n1);
    let n2Edges = getEdges(ar, n2);
    
    console.log('EDGES: ', n1Edges, n2Edges);
    // n2Edges.shifti();
    //remove n1 and n2 from merged vertices
    //remove n2 from all other vertices edges, replacing it with n1 (only if not
    //already there)

    // console.log('n2edges: ', n2Edges);

  };

  // while(array.length > 2) {
  let edge = getEdge(array);
  console.log('EDGE: ', edge, array);

  contract(array, edge);

  // }


  MIN_CUT +=1;
  findMinCut(array);
};
