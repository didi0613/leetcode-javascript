/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var f = [rowIndex][rowIndex];

    //Initialization
    var i,j;
    for(i=0;i<=rowIndex;i++) {
        for(j=0;j<=rowIndex;j++) {
            if(j === 0 || i === j) {
                f[i][j] = 1;
            }
        }
    }

    //Formula
    for(var ii = 2; ii<=rowIndex ;ii++) {
        for(var jj=2;jj<ii;jj++) {
            f[ii][jj] = f[ii-1][jj-1] + f[ii-1][jj];
        }
    }

    return f[rowIndex][rowIndex];
};