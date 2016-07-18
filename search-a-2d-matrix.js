/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 把matrix看成一个m*n的数组,
 * 那么如果把数组一字排开就是正常的有序数组二分搜索了.
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    var row = matrix.length, col = matrix[0].length;
    var low = 0, high = row * col - 1;
    while (low <= high) {
        var mid = parseInt((low + high) / 2);
        if (matrix[parseInt(mid / col)][mid % col] === target) {
            return true;
        } else if (matrix[parseInt(mid / col)][mid % col] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return false;
};