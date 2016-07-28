let totalNumberOfComparisons = 0;

/*
 * Last array element as pivot
 */
function quickSort(array) {
  if (array.length < 2) {
    return;
  }

  const median = function (ar, len, lIdx, rIdx) {
    let middleIdx = lIdx + Math.floor(len/2);
    if (len % 2 === 0) {
      middleIdx -= 1;
    }

    const middle = ar[middleIdx];
    const left = ar[lIdx];
    const right = ar[rIdx - 1];

    if (((left - right) * (middle - left)) >= 0) {
      return [lIdx, left];
    } else if (((right - left) * (middle - right)) >= 0) {
      return [rIdx-1, right];
    }
    return [middleIdx, middle];
  };

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

    let i = l + 1;
    let j = i;
    let pivot;
    let pivotIdx;

    [pivotIdx, pivot] = median(ar, len, l, r);

    swap(ar, pivotIdx, l);

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

function quickSortAndCount(arr) {
  quickSort(arr);

  return totalNumberOfComparisons;
}

module.exports = {
  default: quickSort,
  quickSort: quickSortAndCount
};
