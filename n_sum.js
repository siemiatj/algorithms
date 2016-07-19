/*
    N-SUM Problem

    Having an array of numbers `a`, integers `n` and `z`, we want to check
    if any given `z` integers from the `a` array sum up to the value of
    our given number `n`.
*/

/*
    Recursive solution. Inspired a bit by path searching algorithms.
*/
function isSumPossible(a, n, z) {
    var iMdone = 0,
        len = a.length;

    if (len < z || z < 0) {
        return iMdone;
    }
    if (len === z) {
        var sum = 0;
        for (var i=0; i<len; i+=1){
            sum += a[i];
        }
        return sum === n ? 1 : 0;
    }

    var val, arr;
    var Node = function(length, level, parent) {
        return {
            length: length !== null ? length : null,
            level: level || 1,
            parent: parent || null
        }
    };
    var proceedNode = function(array, parent) {
        var innerVal, innerArr;
        if (iMdone) {
            return;
        }
        if (parent.length === n && parent.level === z) {
            iMdone = 1;
            return;
        }
        if (parent && parent.level < z && parent.length <= n) {
            for (var i=0, l=array.length; i<l; i+=1) {
                innerVal = array[i];
                if (parent.level + 1 === z && parent.length + innerVal === n) {
                    iMdone = 1;
                    break;
                } else if (parent.length + innerVal > n) {
                    break;
                }
                innerArr = array.slice(0);
                innerArr.splice(i, 1);
                proceedNode(innerArr, new Node(parent.length + innerVal, parent.level + 1, parent));
            }
        }
    };

    for (var i=0, l=a.length; i<l; i+=1) {
        val = a[i];
        if (iMdone) {
            break;
        }
        arr = a.slice(0);
        arr.splice(i, 1);
        proceedNode(arr, new Node(val, null, null));
    }

    return iMdone;
}
