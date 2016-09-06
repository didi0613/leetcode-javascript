/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var col = matrix.length;
    var row = matrix[0].length;

    if (row === 1) {
        for (var j = 0; j < col; j++) {
            if (target === matrix[j][0]) {
                return true;
            }
        }
        return false;
    }

    if (col === 1) {
        for (var j = 0; j < row; j++) {
            if (target === matrix[0][j]) {
                return true;
            }
        }
        return false;
    }

    for (var i = 0; i < col; i++) {
        if (matrix[i][0] <= target && matrix[i][row - 1] >= target) {
            for (var j = 0; j < row; j++) {
                if (target === matrix[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
};