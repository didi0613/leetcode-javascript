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