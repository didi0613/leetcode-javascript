/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    var f = new Array(n + 1).fill(0);
    f[0] = 1;
    f[1] = 1;

    for (var i = 2; i <= n; i++) {
        for (var j = 0; j < i; j++) {
            f[i] += f[j] * f[i - j - 1];
        }
    }

    return f[n];
};