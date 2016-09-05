/**
 * @param {number[]} prices
 * @return {number}
 */
/*
 设sell[i] 第i天卖出操作的最大利润
 buy[i] 第i天买进操作的最大利润

 所以，显然有状态转移方程
 buy[i] = max(buy[i-1] , sell[i-2] – prices[i])  // 休息一天在买入，所以是sell[i-2]在状态转移
 sell[i] = max(sell[i-1], buy[i-1] + prices[i])
 最后显然有sell[n-1] > buy[n-1] 所以我们返回sell[n-1]
 */
var maxProfit = function (prices) {
    if (prices.length < 2) {
        return 0;
    }

    var buy = new Array(prices.length).fill(0);
    var sell = new Array(prices.length).fill(0);

    buy[0] = -prices[0];
    buy[1] = Math.max(-prices[0], -prices[1]);
    sell[0] = 0;
    sell[1] = Math.max(0, prices[1] - prices[0]);

    for (var i = 2; i < prices.length; i++) {
        buy[i] = Math.max(sell[i - 2] - prices[i], buy[i - 1]);
        sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i]);
    }

    return sell[prices.length - 1];
};