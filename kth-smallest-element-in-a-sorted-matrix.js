/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    var col = matrix.length;
    var row = matrix[0].length;
    var arr = new Array(col * row);

    for (var j = 0; j < col; j++) {
        for (var i = 0; i < row; i++) {
            arr[i * row + j] = matrix[i][j];
        }
    }

    arr.sort(function (a, b) {
        return a - b;
    });
    
    return arr[k - 1];
};