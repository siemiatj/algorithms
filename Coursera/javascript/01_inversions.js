

function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
 
    let middle = parseInt(arr.length / 2),
      left   = arr.slice(0, middle),
      right  = arr.slice(middle);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}