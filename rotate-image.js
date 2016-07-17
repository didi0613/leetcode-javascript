/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var n = matrix.length;
    for (var i = 0; i < parseInt(n / 2); i++) {
        for (var j = i; j < n - i - 1; j++) {
            // 左上和左下交换
            swap(matrix, i, j, j, n - i - 1);
            // 左上和右下交换
            swap(matrix, i, j, n - i - 1, n - j - 1);
            // 左上和右上交换
            swap(matrix, i, j, n - j - 1, i);
        }
    }
};

function swap(matrix, i, j, x, y) {
    var tmp = matrix[i][j];
    matrix[i][j] = matrix[x][y];
    matrix[x][y] = tmp;
}