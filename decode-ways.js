/**
 * @param {string} s
 * @return {number}
 * dp[i]表示从头到字符串的第i位，一共有多少种解码方法
 */
var numDecodings = function (s) {
    var dp = new Array(s.length + 1);
    dp.fill(0);

    if (s.length === 0) {
        return 0;
    }

    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;

    for (var i = 2; i <= s.length; i++) {
        var tmp = parseInt(s.substring(i - 2, i));
        if (tmp <= 26 && tmp >= 10) {
            dp[i] += dp[i - 2];
        }
        if (parseInt(s.substring(i - 1, i)) !== 0) {
            dp[i] += dp[i - 1];
        }
    }

    return dp[s.length];
};