/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var len = prices.length;
    if (len === 0) {
        return 0;
    } else {
        var minBuy = prices[0];
        var ret = 0;

        for (var i = 1; i < prices.length; i++) {
            if (prices[i] < minBuy) {
                minBuy = prices[i];
            } else {
                ret = Math.max(ret, (prices[i] - minBuy))
            }
        }

        return ret;
    }
};

/*
 * Summarize:
 * minBuy records the min value before current position i
 * ret records the max profit
 */