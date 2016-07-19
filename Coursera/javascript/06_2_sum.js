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

const check2Sum = function (map, num) {
  let ret = false;
  let rest = null;

  for (let k of Object.keys(map)) {
    rest = map[parseInt(k,10)-num];

    if (rest) {
      ret = true;
      break;
    }
  }

  return ret;
}

const check2SumsInRange = function (map, start, end) {
  for (let i = start; i < end + 1; i+=1) {
    if (check2Sum(map, i)) {
      TWOSUMS += 1;
    }
  }
}

lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedLine = line.split(/\s+/);

  parsedLine.forEach((l) => {
    AllNumbers[l] = true;
  });
}).on('close', () => {
  check2SumsInRange(AllNumbers, RANGESTART, RANGEEND);

  console.log('Sums: ', TWOSUMS);
});
