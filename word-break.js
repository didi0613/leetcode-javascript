/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 * time: O(n^2), space: O(n)
 */
var wordBreak = function (s, wordDict) {
    var len = s.length;

    var dp = [];
    dp[0] = true;
    //dp[i]: from index 0 to position i, if it is a valid word
    for (var i = 1; i <= len; i++) {
        for (var j = 0; j < i; j++) {
            dp[i] = dp[j] && wordDict.has(s.substring(j, i));
            if (dp[i]) {
                break;
            }
        }
    }

    return dp[len];
};