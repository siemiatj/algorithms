const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let toSortArray = [];

lineReader.on('line', function (line) {
  toSortArray.push(parseInt(line, 10));
}).on('close', () => {
  quickSort(toSortArray);
  console.log(toSortArray);
});

const quickSort = function(array) {
  if (array.length < 2) {
    return array;
  }

  const partition = function(ar, l, r) {
    if (r - l < 2) {
      return;
    }
    let pivot = ar[l];
    let i = l + 1;
    let j = l + 1;

    for (j; j < r; j += 1) {
      if (ar[j] < pivot) {

        swap(ar, j, i);
        i += 1;
      }
    }

    swap(ar, l, i - 1);

    partition(ar, l, i);
    partition(ar, i, r);
  };

  const swap = function(ar, a, b) {
    let first = ar[a];
    let second = ar[b];

    ar[a] = second;
    ar[b] = first;
  };

  partition(array, 0, array.length);

  return array;
}
