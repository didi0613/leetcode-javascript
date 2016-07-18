/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (triangle.length === 0) {
        return 0;
    }

    if (triangle.length === 1) {
        return triangle[0][0];
    }

    var width = triangle.length;
    var height = triangle[0].length;
    var dp = new Array(width * height);
    dp.fill(0);

    // initialization last row
    for (var i = 0; i < triangle[width - 1].length; i++) {
        dp[i] = triangle[width - 1][i];
    }

    // formula
    for (var i = width * height - 2; i >= 0; i--) {
        for (var j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }

    return dp[0];
};