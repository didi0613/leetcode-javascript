/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) {
        return 1;
    }

    // fn: number of unique digits of length n
    var f = [];
    f[0] = 1;
    f[1] = 9;
    var sum = f[0] + f[1];
    var availableNumbers = 9;
    for (var i = 2; i <= n && availableNumbers > 0; i++) {
        f[i] = f[i - 1] * availableNumbers;
        sum += f[i];
        availableNumbers--;
    }
    return sum;
};