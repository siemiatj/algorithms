/*
 * This is a well known solution to 2 SUM problem, using two pointers on an
 * array. The complexity of this algorithm is O(nlogn) so theoretically
 * slower than a hash lookup.
 *
 * It takes around 3min to return the result.
 */

const fs = require('fs');
const readline = require('readline');
const path = require('path');
const PATHARG = process.argv[2];
const RANGESTART = parseInt(process.argv[3], 10);
const RANGEEND = parseInt(process.argv[4], 10);
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});
let TWOSUMS = 0;
const AllNumbers = [];
const AllNumbersTmp = {};

const check2Sum = function (arr, num) {
  var iMdone = 0,
    len = arr.length,
    cursorR, cursorL;

  cursorL = 0;
  cursorR = len-1;

  while (cursorL < cursorR) {
    if (arr[cursorL] + arr[cursorR] === num) {
      iMdone = 1;
      break;
    }

    if (arr[cursorL] + arr[cursorR] < num) {
      cursorL += 1;
    } else {
      cursorR -= 1;
    }
  }

  return iMdone;
};

const check2SumsInRange = function (map, start, end) {
  let total = end - start;
  total = 1.0 / total;

  for (let i = start; i < end + 1; i += 1) {
    if (check2Sum(map, i)) {
      TWOSUMS += 1;
    }

    // console.log('Progress summing: ', ((i - start)*100*total), '% (', TWOSUMS, ' sums)');
  }
};

console.time('loading');
lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedNumber = parseInt(line, 10);

  if (!(parsedNumber in AllNumbersTmp)) {
    AllNumbers.push(parsedNumber);
    AllNumbersTmp[parsedNumber] = 1;
  }
}).on('close', () => {
  const compareFn = function compare(a, b) {
    return a - b;
  };
  const sorted = AllNumbers.sort(compareFn);
  console.timeEnd('loading');

  check2SumsInRange(sorted, RANGESTART, RANGEEND);

  console.log('Sums: ', TWOSUMS);
});
