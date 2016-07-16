/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }

    if (p.length === 1 || p[1] !== '*') {
        if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
            return isMatch(s.substring(1), p.substring(1));
        } else {
            return false;
        }
    } else {
        var i = 0;
        do {
            if (isMatch(s.substring(i), p.substring(2))) {
                return true;
            }
            i++;
        } while (i <= s.length && (s[i - 1] === p[0] || p[0] === '.'));

        return false;
    }
};


// DP Solution
/*
 dp[i][j]表示字符串s的前i个字符与字符串p的前j个字符组成的两个字符串是否匹配
 dp[s.length()][p.length()]即是字符串s与字符串p是否匹配。
 1. 正常字符，即不是'*'也不是'.'
 这种比较好处理，只要两个字符串向前一位能够匹配的同时两字符串最后一个字符相等, 可得到
 dp[i][j] = dp[i - 1][j - 1] && s.charAt(i - 1) == p.charAt(j - 1)

 2. 字符为'.'
 这种相对也比较好处理，只要两个字符串向前一位能够匹配即可，因为'.'能匹配字符串s的任意字符，所以可得到
 dp[i][j] = dp[i - 1][j - 1]

 3. 字符为'*'
 这种比较复杂，因为'*'能匹配任意个数的前面的字符。
 所以我们可以先考虑能够匹配0个和1个前面字符的简单情况，比如:

 匹配1个表示取0个前面字符意味着忽略自己，可到
 dp[i][j] = dp[i][j - 1];

 匹配0个表示可以忽略自己及前面那个字符，可得
 dp[i][j] = dp[i][j - 2];

 再考虑匹配2个及2个以上前面字符的情况，这种情况可以这么考虑:
 如果dp[i][j] = true是'*'匹配k(k>=2)个前面字符的结果，那么'*'匹配k-1个前面字符的结果也必须是true，
 所以条件之一便是dp[i - 1][j] == true，另外一个条件便是s的最后一个字符必须匹配p的'*'前面的字符，
 所以得到dp[i][j] = dp[i -1][j] && (p.charAt(j - 2) == s.charAt(i - 1) || p.charAt(j - 2) == '.'
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * time: O(n^2), space: O(n^2)
 */
var isMatch = function (s, p) {
    var slen = s.length;
    var plen = p.length;

    // create a dp[][]
    // dp[i][j]: s[0 ~ i-1] matches p[0 ~ j-1]
    // Ans: dp[slen+1][plen+1]
    var dp = new Array(slen + 1);
    for (var i = 0; i < slen + 1; i++) {
        dp[i] = new Array(plen + 1);
        dp[i].fill(false);
    }

    // initialization
    dp[0][0] = true;
    for (i = 1; i <= slen; i++) {
        dp[i][0] = false;
    }
    for (i = 1; i <= plen; i++) {
        if (i > 1 && p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 1] || dp[0][i - 2];
        }
    }

    // formula
    for (i = 1; i <= slen; i++) {
        for (var j = 1; j <= plen; j++) {
            if (p[j - 1] === '*') {
                if (dp[i][j - 1] || dp[i][j - 2]) {
                    // match none or one character before *
                    dp[i][j] = true;
                } else if (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.')) {
                    // match multi for one character before *
                    dp[i][j] = true;
                }
            } else if (p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (dp[i - 1][j - 1] && s[i - 1] === p[j - 1]) {
                dp[i][j] = true;
            }
        }
    }

    return dp[slen][plen];
};