/*
A happy number is defined by the following process: Start with a positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay). Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers).

// is  '7' happy?
// 7 -> 49 
// 4^2 + 9^2 = 97
// 9^2 + 7^2 = 130
// 1^2 + 3^2 + 0^2 = 10
// 1^2 + 0^2 = 1 (happy number)

// is '2' happy?
// 2 -> 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4 (loop encountered)

Live demo : https://coderpad.io/YKKWFGWH

*/

let happyNumbers = [];

function happyCallback() {
  happyNumbers.push(this); 
}

function checkForHappyNumber(num, clbck) {
  let numbersObj = {};
  
  function getDigits(number) {
    let numStr = `${number}`,
      digits = numStr.split('');

    return digits;
  }
  
  function checkAppeared(number) {
    return numbersObj[number];
  }
  
  function sumDigits(digits) {
    let tmpSum = 0,
      sq = null;

    for (let i=0, l=digits.length; i<l; i+=1) {
      sq = digits[i]*digits[i];
      tmpSum += sq;
    }
    
    if (checkAppeared(tmpSum)) {
      return null;
    }
    
    numbersObj[tmpSum] = true;
    return tmpSum;
  }

  function checkHappy(number) {
    let dig = getDigits(number);
    number = sumDigits(dig);

    if (number === null) {
      return;
    }
    if (number === 1) {
      clbck();
    } else {
      checkHappy(number, clbck);
    }
  }
  
  return checkHappy(num, clbck);
}

for (let i=0; i<100; i+=1) {
  checkForHappyNumber(i, happyCallback.bind(i));  
}

console.log('HAPPY NUMBERS ! \n');
console.log(happyNumbers);
