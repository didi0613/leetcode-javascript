/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var ret = 1;
    if (m === 1 || n === 1) {
        return ret;
    }

    var dp = new Array(m);
    for (var i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(1);
    }

    // initialization
    dp[0][0] = 1;
    dp[1][0] = 1;
    dp[0][1] = 1;

    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};