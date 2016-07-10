/**
 * @param {number[]} prices
 * @return {number}
 * 把所有递增区间的获益求和
 */
var maxProfit = function (prices) {
    var len = prices.length;
    if (len === 0) {
        return 0;
    }

    var ret = 0;
    for (var i = 0; i < len - 1; i++) {
        var diff = prices[i + 1] - prices[i];
        if (diff > 0) {
            ret += diff;
        }
    }
    return ret;
};