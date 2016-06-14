/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    var divider = 5;
    var ret = 0;

    while (n >= divider) {
        ret += Math.floor(n / divider);
        divider = divider * 5;
    }

    return ret;
};