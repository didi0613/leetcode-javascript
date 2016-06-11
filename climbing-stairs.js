/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var ret = [];
    ret[0] = 0;
    ret[1] = 1;
    ret[2] = 2;

    for (var i = 3; i <= n; i++) {
        ret[i] = ret[i - 1] + ret[i - 2];
    }

    return ret[n];
};