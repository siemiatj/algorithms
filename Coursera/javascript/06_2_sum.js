/*
 * This is a pretty straightforward solution, that just iterates over the hash set
 * and for each key tries to lookup another key that makes the sum.
 *
 * Be aware that using the data set from the course problem it takes around ~16h (MB Air 13')
 * to give the result.
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
const AllNumbers = {};

const check2Sum = function (map, num) {
  let ret = false;
  let restKey = null;
  let rest = null;

  for (const k of Object.keys(map)) {
    restKey = map[k] - num;
    rest = map[restKey];

    if (rest) {
      ret = true;
      break;
    }
  }

  return ret;
};

const check2SumsInRange = function (map, start, end) {
  let total = end - start;
  total = 1.0 / total;

  for (let i = start; i < end + 1; i += 1) {
    if (check2Sum(map, i)) {
      TWOSUMS += 1;
    }

    console.log('Progress: ', ((i - start)*100*total), '% (', TWOSUMS, ' sums)');
  }
};

lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedLine = line.split(/\s+/);

  AllNumbers[parsedLine[0]] = parseInt(parsedLine[0], 10);
}).on('close', () => {
  check2SumsInRange(AllNumbers, RANGESTART, RANGEEND);

  console.log('Sums: ', TWOSUMS);
});
