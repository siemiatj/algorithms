const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);

console.log('ARGS: ', pathArg, filePath);

var test = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = parseInt(arr.length / 2),
    left   = arr.slice(0, middle),
    right  = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}
 
console.log(mergeSort(test));
