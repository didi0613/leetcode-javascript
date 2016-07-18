/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 * p[i][j] s1取前i个字符 s2取前j个字符 s3取前i+1字符 是否能匹配
 */
var isInterleave = function (s1, s2, s3) {
    var len1 = s1.length, len2 = s2.length, len3 = s3.length;
    if (len1 + len2 !== len3) {
        return false;
    }

    var dp = new Array(len1 + 1);
    for (var i = 0; i <= len1; i++) {
        dp[i] = new Array(len2 + 1);
        dp[i].fill(false);
    }

    // initialization
    dp[0][0] = true;
    for (i = 0; i < len1; i++) {
        if (dp[i][0] && s1[i] === s3[i]) {
            dp[i + 1][0] = true;
        }
    }
    for (var j = 0; j < len2; j++) {
        if (dp[0][j] && s2[j] === s3[j]) {
            dp[0][j + 1] = true;
        }
    }

    //formula
    for (var i = 1; i <= len1; i++) {
        for (var j = 1; j <= len2; j++) {
            if (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) {
                dp[i][j] = true;
            }
            if (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]) {
                dp[i][j] = true;
            }
        }
    }
    return dp[len1][len2];
};