/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    var dp = new Array(m);
    for (var i = 0; i < m; i++) {
        dp[i] = new Array(n);
        dp[i].fill(0);
    }

    //initialization
    for (var i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            dp[i][0] = 0;
            break;
        } else {
            dp[i][0] = 1;
        }
    }
    for (var i = 0; i < n; i++) {
        if (obstacleGrid[0][i] === 1) {
            dp[0][i] = 0;
            break;
        } else {
            dp[0][i] = 1;
        }
    }

    //formula
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};