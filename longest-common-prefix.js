/**
 * @param {string[]} strs
 * @return {string}
 */
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