let COUNT = 0;

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      COUNT += left.length;
      result.push(right.shift());
    }
  }

  if (left.length) {
    result = result.concat(left);
  } else {
    result = result.concat(right);
  }

  return result;
}

function mergeAndCount(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = parseInt(arr.length / 2, 10);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeAndCount(left), mergeAndCount(right));
}

function countInversions(arr) {
  mergeAndCount(arr);

  return COUNT;
}

module.exports = {
  default: mergeAndCount,
  countInversions
};
