const fs = require('fs');
const readline = require('readline');
const path = require('path');
const pathArg = process.argv[2];
const filePath = path.resolve(__dirname, pathArg);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});
const quickSort = require('./lib/quicksort_last').quickSort;
const toSortArray = [];

lineReader.on('line', (line) => {
  toSortArray.push(parseInt(line, 10));
}).on('close', () => {
  const comparisons = quickSort(toSortArray);
  console.log('Total number of comparisons (last element as pivot): ', comparisons);
});
