/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    if (s.length === 0) {
        return 0;
    }

    var arr = s.split(' ');
    return arr[arr.length - 1].length;
};