const fs = require('fs');
const readline = require('readline');
const path = require('path');
const Heap = require('heap');
const PATHARG = process.argv[2];
const filePath = path.resolve(__dirname, PATHARG);
const lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

const heapHigh = new Heap();
const heapLow = new Heap((a, b) => {
  if (a < b) {
    return 1;
  } else if (a > b) {
    return -1;
  }
  return 0;
});
let MEDIANSUMS = 0;

const getNewMedian = (newNum) => {
  let hLow;
  let tmp;

  if (!heapLow.size()) {
    heapLow.push(newNum);
    MEDIANSUMS += newNum;
  } else {
    hLow = heapLow.peek();

    if (newNum > hLow) {
      heapHigh.push(newNum);

      if (heapHigh.size() > heapLow.size()) {
        tmp = heapHigh.pop();
        heapLow.push(tmp);
      }
    } else {
      heapLow.push(newNum);

      if (heapLow.size() - heapHigh.size() > 1) {
        tmp = heapLow.pop();
        heapHigh.push(tmp);
      }
    }

    MEDIANSUMS += heapLow.peek();
  }
};

lineReader.on('line', (line) => {
  /*
   * Preprocessing input data
   */
  const parsedNum = parseInt(line, 10);

  getNewMedian(parsedNum);
}).on('close', () => {
  console.log('Sums: ', MEDIANSUMS % 10000);
});
