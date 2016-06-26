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
  quickSort(toSortArray, 0, toSortArray.length);
  console.log('Total number of comparisons (1st element as pivot): ', totalNumberOfComparisons);
});

const quickSort = function(array, leftIdx, rightIdx) {
  if (array.length < 2) {
    return;
  }

  const partition = function(ar, l, r) {
    let pivot = ar[l];
    let i = l + 1;
    let j = i;

    for (j; j < r; j += 1) {
      if (ar[j] < pivot) {
        swap(ar, j, i);
        i += 1;
      }
    }

    swap(ar, l, i - 1);

    return i - 1;
  };

  const swap = function(ar, a, b) {
    let tmp = ar[a];

    ar[a] = ar[b];
    ar[b] = tmp;
  };

  if (leftIdx < rightIdx) {
    let pivotIdx = partition(array, leftIdx, rightIdx);
    totalNumberOfComparisons += (rightIdx - leftIdx - 1);

    quickSort(array, leftIdx, pivotIdx);
    quickSort(array, pivotIdx + 1, rightIdx);
  }
}
