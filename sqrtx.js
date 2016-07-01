// Brute Force
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0) {
        return 0;
    } else if (x < 0) {
        return (-1) * mySqrt(-1 * x);
    } else {
        var start = 0, end = Math.floor(x / 2);
        while (start <= end) {
            var product = (start + 1) * (start + 1);
            if (product < x) {
                start++;
            } else if (product === x) {
                return start + 1;
            } else {
                return start;
            }
        }

        return start + 1;
    }
};

// Binary Search
/**
 * @param {number} x
 * @return {number}
 * time: O(logn), space: O(1)
 */
var mySqrt = function (x) {
    var i = 1, j = x;
    while (i <= j) {
        var mid = parseInt((i + j) / 2);
        if (mid === x / mid) {
            return mid;
        } else if (mid < x / mid) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }

    return j;
};