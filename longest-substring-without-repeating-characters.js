/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var len = s.length;
    if (len === 0) {
        return 0;
    }
    var ret = 0;
    var start = 0, end = 0;
    var hashmap = {};

    while (end < len) {
        if (hashmap[s[end]]) {
            while (hashmap[s[end]]) {
                hashmap[s[start]] = false;
                start++;
            }
            hashmap[s[end]] = true;
            end++;
        } else {
            hashmap[s[end]] = true;
            ret = Math.max(ret, end - start + 1);
            end++;
        }
    }
    return ret;
};