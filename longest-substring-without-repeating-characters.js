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
    var local = 0;
    var hashmap = {};

    for (var i in s) {
        if (s[i] in hashmap) {
            local = 1;
        } else {
            hashmap[s[i]] = true;
            local++;
            ret = Math.max(local, ret);
        }
    }

    return ret;
};