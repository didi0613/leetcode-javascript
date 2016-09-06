/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
    var count = new Array(primes.length).fill(0);
    var res = new Array(n);
    res[0] = 1;

    for (var i = 1; i < n; i++) {
        var min = Number.MAX_VALUE;
        for (var j = 0; j < primes.length; j++) {
            min = Math.min(min, primes[j] * res[count[j]]);
        }
        res[i] = min;

        for (var j = 0; j < count.length; j++) {
            if (res[count[j]] * primes[j] === min) {
                count[j]++;
            }
        }
    }
    return res[n - 1];
};