/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var f = [[]];

    //Initialization
    for(var i=0;i<=rowIndex;i++) {
        for(var j=0;j<=rowIndex;j++) {
            if(j === 0 || i === j) {
                // Javacript dont have the two dimensional array definition
                // All it has is an array of an array
                if (!f[i]) {
                    f[i] = [];
                }
                f[i][j] = 1;
            }
        }
    }

    //Formula
    for(var ii = 1; ii<=rowIndex ;ii++) {
        for(var jj=1;jj<ii;jj++) {
            f[ii][jj] = f[ii-1][jj-1] + f[ii-1][jj];
        }
    }

    return f[rowIndex];
};

/*
* Pay attention to the way that javascript create two dimensional array;
*/