/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    var ret = 0;

    for(var i=0;i<len;i++) {
        var sellMax = 0;
        for(var j = i+1;j<len;j++) {
            sellMax = Math.max(sellMax, prices[j]);
        }
        ret = Math.max(ret, sellMax-prices[i]);
    }

    return ret;
};

/*
* Summarization
*/