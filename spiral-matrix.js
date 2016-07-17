/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    var ret = [];
    if (matrix.length === 0) {
        return ret;
    }
    var rowBegin = 0, rowEnd = matrix.length - 1;
    var colBegin = 0, colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        //left to right
        for (var j = colBegin; j <= colEnd; j++) {
            ret.push(matrix[rowBegin][j]);
        }
        rowBegin++;

        //right to bottom
        for (j = rowBegin; j <= rowEnd; j++) {
            ret.push(matrix[j][colEnd]);
        }
        colEnd--;

        // check whether the row or col still exists to prevent duplicates
        if (rowBegin <= rowEnd) {
            // Traverse Left
            for (j = colEnd; j >= colBegin; j--) {
                ret.push(matrix[rowEnd][j]);
            }
        }
        rowEnd--;

        // check whether the row or col still exists to prevent duplicates
        if (colBegin <= colEnd) {
            // Traver Up
            for (j = rowEnd; j >= rowBegin; j--) {
                ret.push(matrix[j][colBegin]);
            }
        }
        colBegin++;
    }

    return ret;
};