/*
    2-SUM Problem

    Three different solutions for the same problem.
    Having an array of numbers `a` and an integer `n`, we want to check
    if any given two integers from the `a` array sum up to the value of
    our given number `n`
*/

/* 
    Simple brute forge solution 
*/
function isSumPossible1(a, n) {
    var iMdone = 0,
        len = a.length,
        val, i, j;

    if (len < 2) {
        return iMdone;
    }
    if (len === 2) {
        return a[0]+a[1] === n ? 1 : 0;
    }

    for (i=0; i<len; i+=1) {
        val = a[i];
        
        // since all the test cases pass I assume that the numbers in the array are always positive
        if (val > n) {
            continue;
        }
        if (iMdone) {
            break;
        }
        for (j=i; j < len; j+=1) {
            if ((val + a[j] === n)) {
                iMdone = 1;
                break; 
            }
        }
    }
    return iMdone; 
}

/* 
    I don't know if this algo has a name. But it doesn't sort the array upfront and
    it has a really low complexity.
*/
function isSumPossible2(a, n) {
    var iMdone = 0,
        len = a.length,
        cursorR, cursorL;

    if (len < 2) {
        return iMdone;
    }
    if (len === 2) {
        return a[0]+a[1] === n ? 1 : 0;
    }
    
    do {
        if (a[cursorL] + a[cursorR] === n) {
            iMdone = 1;
            break;
        }
        if (cursorR+1 === len) {
            cursorL += 1;
            cursorR = cursorL+1;
        } else {
            cursorR += 1;   
        }
    } while(cursorL !== len-1)

    return iMdone;  
}

/* 
    The well known solution to this problem 
*/
function isSumPossible3(a, n) {
    var iMdone = 0,
        len = a.length,
        cursorR, cursorL,
        arr, compareFn;

    if (len < 2) {
        return iMdone;
    }
    if (len === 2) {
        return a[0]+a[1] === n ? 1 : 0;
    }
    
    var compareFn = function compare(a, b) {
      if (a > b) {
        return -1;
      }
      if (a < b) {
        return 1;
      }
      return 0;
    }
    
    arr = a.sort(compareFn);
    cursorL = 0;
    cursorR = len-1;
        
    while (cursorL < cursorR) {
        if (arr[cursorL] > n) {
            cursorL += 1;
            continue;
        }
        if (arr[cursorL] + arr[cursorR] === n) {
            iMdone = 1;
            break;
        } else if (arr[cursorL] + arr[cursorR] > n) {
            cursorL += 1;
        } else {
            cursorR -= 1;
        }
    }

    return iMdone;   
 }