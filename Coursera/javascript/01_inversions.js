const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let COUNT = 0;
let invertsArray = [];

lineReader.on('line', function (line) {
  invertsArray.push(parseInt(line, 10));
}).on('close', () => {
  mergeAndCount(invertsArray);
  console.log('Inverts in array: ', COUNT);
});

function mergeAndCount(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = parseInt(arr.length / 2),
    left   = arr.slice(0,middle),
    right  = arr.slice(middle);

  return merge(mergeAndCount(left), mergeAndCount(right));
}
 
function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      COUNT += left.length;
      result.push(right.shift());
    }
  }

  if (left.length) {
    result = result.concat(left);
  } else {
    result = result.concat(right);
  }

  return result;
}
