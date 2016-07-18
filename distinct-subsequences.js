/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * state: dp[i][j] 表示S串中从开始位置到第i位置与T串从开始位置到底j位置匹配的子序列的个数
 * function: dp[i][j] = dp[i][j-1] 就是说假设S已经匹配了j-1个字符,无论S[j]和T[i]是否匹配, 至少是dp[i][j-1]
 * 如果匹配(S[j]和T[i]匹配)让S[j - 1]和T[i - 1]去匹配 (由图得关系)
 * dp[i][j] += dp[i-1][j-1]
 * initial: f[i][0] = 0 f[0][j] = 1 空集也是subsequences
 * return dp[m][n]
 */
var numDistinct = function (s, t) {
    var tlen = t.length, slen = s.length;
    if (tlen > slen) {
        return 0;
    }

    var dp = new Array(tlen + 1);
    for (var i = 0; i <= tlen; i++) {
        dp[i] = new Array(slen + 1);
        dp[i].fill(0);
    }
    dp[0][0] = 1;


    for (var i = 0; i <= tlen; i++) {
        dp[i][0] = 0;
    }
    for (var j = 0; j <= slen; j++) {
        dp[0][j] = 1;
    }

    for (var i = 1; i <= tlen; i++) {
        for (var j = 1; j <= slen; j++) {
            dp[i][j] = dp[i][j - 1];
            if (s[j - 1] === t[i - 1]) {
                dp[i][j] += dp[i - 1][j - 1];
            }
        }
    }
    return dp[tlen][slen];
};