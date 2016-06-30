const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let toSortArray = [];
let totalNumberOfComparisons = 0;

lineReader.on('line', function (line) {
  toSortArray.push(parseInt(line, 10));
}).on('close', () => {
  quickSort(toSortArray);
  console.log('Total number of comparisons (last element as pivot): ', totalNumberOfComparisons);
});

/*
 * Last array element as pivot
 */
const quickSort = function(array) {
  if (array.length < 2) {
    return;
  }

  const partition = function(ar, l, r) {
    let len = r - l;

    if (len < 2) {
      return;
    }
    totalNumberOfComparisons += len - 1;

    let pivot = ar[r - 1];
    let i = l + 1;
    let j = i;

    swap(ar, r-1, l);

    for (j; j < r; j += 1) {
      if (ar[j] < pivot) {
        swap(ar, j, i);
        i += 1;
      }
    }

    swap(ar, l, i - 1);

    partition(ar, l, i - 1);
    partition(ar, i, r);
  };

  const swap = function(ar, a, b) {
    let tmp = ar[a];

    ar[a] = ar[b];
    ar[b] = tmp;
  };

  partition(array, 0, array.length);
}
