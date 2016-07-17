/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var n = matrix.length;
    for (var i = 0; i < n / 2; ++i)
        // 由最外围一圈，向里一圈圈收缩
        for (var j = i; j < n - 1 - i; ++j) {
            var t = matrix[i][j];
            matrix[i][j] = matrix[n - 1 - j][i];
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            matrix[j][n - 1 - i] = t;
        }
};