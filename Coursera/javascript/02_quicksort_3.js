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
  console.log('Total number of comparisons (median element as pivot): ', totalNumberOfComparisons);
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

    let i = l + 1;
    let j = i;
    let pivot, pivotIdx;

    [pivotIdx, pivot] = median(ar, len, l, r);

    swap(ar, pivotIdx, l);

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

  const median = function(ar, len, lIdx, rIdx) {
    let middleIdx = lIdx + Math.floor(len/2);
    if (len % 2 === 0) {
      middleIdx -= 1;
    }

    let middle = ar[middleIdx];
    let left = ar[lIdx];
    let right = ar[rIdx - 1];

    if (((left - right) * (middle - left)) >= 0) {
      return [lIdx, left];
    } else if (((right - left) * (middle - right)) >= 0) {
      return [rIdx-1, right];
    }
    return [middleIdx, middle];
  };

  const swap = function(ar, a, b) {
    let tmp = ar[a];

    ar[a] = ar[b];
    ar[b] = tmp;
  };

  partition(array, 0, array.length);
}
