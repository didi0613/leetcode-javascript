/**
 * @param {string[]} strs
 * @return {string}
 */
// Solution 1
var longestCommonPrefix = function (strs) {
    var strnum = strs.length;

    if (strnum === 0) {
        return "";
    } else if (strnum === 1) {
        return strs[0];
    }

    var prefix = strs[0];

    for (var i = 1; i < strnum; i++) {
        var len = Math.min(prefix.length, strs[i].length);
        for (var j = 0; j < len; j++) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
        }
        prefix = prefix.substring(0, j);
    }

    return prefix;
};

// Solution 2
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var len = strs.length;
    if (len === 0) {
        return "";
    }
    if (len === 1) {
        return strs[0];
    }

    // Guarantee there are at lease 2 strings
    var ret = "";
    for (var index = 0; ; index++) {
        var target = strs[0][index];

        for (var i = 1; i < len; i++) {
            if (strs[i][index] !== target || index >= strs[i].length) {
                return ret;
            }
        }

        ret += target;
    }

    return ret;
};