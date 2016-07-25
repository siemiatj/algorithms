let totalNumberOfComparisons = 0;

/*
 * Last array element as pivot
 */
function quickSort(array) {
  if (array.length < 2) {
    return;
  }

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

    const pivot = ar[r - 1];
    let i = l + 1;
    let j = i;

    swap(ar, r-1, l);

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
