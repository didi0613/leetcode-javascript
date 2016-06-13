/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    } else if (x >= 0 && x < 10) {
        return true;
    }

    var x_str = x.toString();
    var len = x_str.length;
    var start = 0, end = len - 1;

    while (start <= end) {
        if (x_str.charAt(start) === x_str.charAt(end)) {
            start++;
            end--;
        } else {
            return false;
        }
    }

    return true;
};