/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    if (n <= 26) {
        return String.fromCharCode(64 + n);
    }

    var ret = "";
    while (n > 0) {
        // 因为这里的值是以1为基准的，而不是0，相当于26进制的数都整体减1，才能对应上从0开始的十进制数。
        n--;
        var a = n % 26;
        ret = String.fromCharCode(65 + a) + ret;
        n = Math.floor(n / 26);
    }

    return ret;
};