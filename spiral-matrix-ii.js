/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    var num = 1;
    var res = new Array(n);
    for (var i = 0; i < n; i++) {
        res[i] = new Array(n);
    }

    for (var cur = 0; cur < n / 2; cur++) {
        for (var j = cur; j < n - 1 - cur; j++) {
            res[cur][j] = num++;
        }
        for (var i = cur; i < n - 1 - cur; i++) {
            res[i][n - 1 - cur] = num++;
        }
        for (var j = n - 1 - cur; j > cur; j--) {
            res[n - 1 - cur][j] = num++;
        }
        for (var i = n - 1 - cur; i > cur; i--) {
            res[i][cur] = num++;
        }
    }

    if (n % 2 === 1) {
        res[parseInt(n / 2)][parseInt(n / 2)] = num;
    }

    return res;
};