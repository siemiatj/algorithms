const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Heap = require('heap');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

const minHeap = new Heap();
const maxHeap = new Heap((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
});
const totalLength = 0;

lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedLine = line.split(/\s+/);
  const parsedNum = parseInt(parsedLine[0], 10);

  console.log('Num: ', parsedNum);
  // minHeap.push(parsedNum);
  // maxHeap.push(parsedNum);
  if (!totalLength) {
    minHeap.push(parsedNum);
  } else {

  }
}).on('close', () => {

});

