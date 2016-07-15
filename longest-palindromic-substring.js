/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var len = s.length;
    var ret = s[0];

    for (var i = 0; i < len - 1; i++) {
        helper(s, i, 0);
        helper(s, i, 1);
    }

    return ret;

    function helper(s, i, os) {
        var start = i, end = i + os;
        while (start >= 0 && end < len) {
            if (s[start] === s[end]) {
                var tmp = s.substring(start, end + 1);
                ret = ret.length > tmp.length ? ret : tmp;
                start--;
                end++;
            } else {
                break;
            }
        }
    }
};