const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);

console.log('ARGS: ', pathArg, filePath);

var test = [34, 203, 3, 746, 200, 984, 198, 764, 9];
var test1 = [2, 4, 1, 3, 5];
var test2 = [1, 5, 4, 8, 10, 2, 6, 9, 3, 7];

let COUNT = 0;

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = parseInt(arr.length / 2),
    left   = arr.slice(0, middle),
    right  = arr.slice(middle);

  return mergeAndCount(mergeSort(left), mergeSort(right));
}
 
function mergeAndCount(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      COUNT += left.length;
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}
 
console.log(mergeSort(test1), COUNT);
// console.log(mergeSort(test2), COUNT);
