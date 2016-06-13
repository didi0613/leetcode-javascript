/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // dp[n][m] = 1 (dp[n][0] || dp[n][n])
    //          = dp[n-1][m-1] + dp[n-1][m]

    var ret = [];
    if (numRows === 0) {
        return ret;
    }

    if (numRows === 1) {
        return [[1]];
    }

    var lastline = [1, 1];
    ret.push([1]);
    ret.push(lastline);

    for (var i = 3; i <= numRows; i++) {
        var line = [];
        for (var j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                line.push(1)
            } else {
                line.push(lastline[j - 1] + lastline[j]);
            }
        }
        lastline = line;
        ret.push(line);
    }

    return ret;
};