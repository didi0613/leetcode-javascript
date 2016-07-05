// Brute Force
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var start = 0, end = Math.floor(x / 2);
    // 注意等号的情况，2为special case
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

    // Input 0 or 1
    return x;
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

// Binary Search
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var start = 1, end = Math.floor(x / 2);

    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (mid * mid < x) {
            if ((mid + 1) * (mid + 1) > x) {
                return mid;
            } else if ((mid + 1) * (mid + 1) === x) {
                return mid + 1;
            } else {
                start = mid + 1;
            }
        } else {
            end = mid - 1;
        }
    }

    return x;
};