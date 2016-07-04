/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) {
        return 1;
    }

    n = Math.min(n, 10);

    // fn: number of unique digits of length n
    var f = [];
    f[0] = 1;
    f[1] = 9;
    var i = 2;
    var availableNumbers = 9;
    var sum = f[0] + f[1];

    while (i <= n && availableNumbers > 0) {
        f[i] = f[i - 1] * availableNumbers;
        sum += f[i];
        i++;
        availableNumbers--;
    }

    return sum;
};