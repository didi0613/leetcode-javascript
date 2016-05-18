/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // Divider 5,5*5,5*5*5...
    var divider = 5;
    var ret = 0;
    while(divider <= n) {
        ret += Math.floor(n/divider);
        divider = divider*5;
    }

    return ret;
};