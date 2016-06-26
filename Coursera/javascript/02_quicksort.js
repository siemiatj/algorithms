let toSort = [3,8,2,5,1,4,7,6];

const quicksort = function(array) {
  if (array.length < 2) {
    return array;
  }

  const partition = function(ar, l, r) {
    if (r - l < 2) {
      return;
    }
    let pivot = ar[l];
    let i = l + 1;
    let j = l + 1;

    for (j; j < r; j += 1) {
      if (ar[j] < pivot) {
        swap(ar, j, i);
        i += 1;
      }
    }

    swap(ar, l, i - 1);

    partition(ar, l, i);
    partition(ar, i, r);
  };

  const swap = function(ar, a, b) {
    let first = ar[a];
    let second = ar[b];

    ar[a] = second;
    ar[b] = first;
  };

  partition(array, 0, array.length);

  return array;
}

console.log(quicksort(toSort));
