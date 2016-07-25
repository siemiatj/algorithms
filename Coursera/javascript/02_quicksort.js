// const fs = require('fs');
// const readline = require('readline');
// const path = require('path');
// const pathArg = process.argv[2];
// const filePath = path.resolve(__dirname, pathArg);
// const lineReader = readline.createInterface({
//   input: fs.createReadStream(filePath)
// });

// const toSortArray = [];
let totalNumberOfComparisons = 0;

/*
 * First array element as pivot
 */
function quickSort(array) {
  if (array.length < 2) {
    return;
  }

  const swap = function (ar, a, b) {
    const tmp = ar[a];

    ar[a] = ar[b];
    ar[b] = tmp;
  };

  const partition = function (ar, l, r) {
    const len = r - l;

    if (len < 2) {
      return;
    }
    totalNumberOfComparisons += len - 1;

    const pivot = ar[l];
    let i = l + 1;
    let j = i;

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

  partition(array, 0, array.length);
}

// lineReader.on('line', (line) => {
//   toSortArray.push(parseInt(line, 10));
// }).on('close', () => {
//   quickSort(toSortArray);
//   console.log('Total number of comparisons (1st element as pivot): ', totalNumberOfComparisons);
// });

module.exports = quickSort;
