/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (x === 1) {
        return 1;
    }

    if (n >= 1) {
        return calcPow(x, n);
    } else {
        return calcPow(1 / x, n * (-1));
    }
};

function calcPow(x, n) {
    var ret = 1;
    for (var i = 0; i < n; i++) {
        ret = ret * x;

        if (x > Math.pow(2, 31) - 1) {
            return 0;
        }

        if (x < Math.pow(2, 31) * (-1)) {
            return 0;
        }
    }

    return ret;
}