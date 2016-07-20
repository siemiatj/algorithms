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

const check2SumsInRange = function (map, start, end) {
  let total = end - start;
  total = 1.0 / total;

  for (let i = start; i < end + 1; i += 1) {
    if (map[i]) {
      TWOSUMS += 1;
    }

    console.log('Progress summing: ', ((i - start)*100*total), '% (', TWOSUMS, ' sums)');
  }
};

const getAllSums = function (list, start, end) {
  const sumPairs = {};
  let fst;
  let snd;

  for (let i=0; i<list.length; i+=1) {
    fst = list[i];

    for (let y=0; y<list.length; y+=1) {
      snd = list[y];

      if (fst !== snd && fst + snd >= start && fst + snd <= end) {
        sumPairs[fst+snd] = 1;
      }
    }

    console.log('Progress computing: ', ((i/list.length)*100), '%');
  }

  return sumPairs;
};

lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedLine = line.split(/\s+/);

  AllNumbers.push(parseInt(parsedLine[0], 10));
}).on('close', () => {
  const allExistingSums = getAllSums(AllNumbers, RANGESTART, RANGEEND);

  check2SumsInRange(allExistingSums, RANGESTART, RANGEEND);

  console.log('Sums: ', TWOSUMS);
});
