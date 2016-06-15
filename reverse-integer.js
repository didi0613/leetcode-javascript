// Solution 1
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < 0) {
        return -1 * reverse(-x);
    }

    var arr = x.toString().split('');
    var len = arr.length;
    if (len <= 1) {
        return x;
    }

    var start = 0, end = len - 1;
    while (start < end) {
        var tmp = arr[start];
        arr[start] = arr[end];
        arr[end] = tmp;
        start++;
        end--;
    }

    // Overflow check
    if (parseInt(arr.join('')) >= 2147483648) {
        return 0;
    }

    return parseInt(arr.join(''));
};

// Solution 2
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x < 0) {
        return (-1) * reverse(x * (-1));
    } else if (x === 0) {
        return 0;
    } else {
        var ret = parseInt(x.toString().split('').reverse().join(''));
        if (ret > Math.pow(2, 31) - 1) {
            return 0;
        } else {
            return ret;
        }
    }
};