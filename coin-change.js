/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // dp[i]:兑换目标i的最少硬币数
    // dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);

    // 硬币组合个数不可能大于amount，因此若某下标的元素值
    // 为amount + 1说明无法用coins里的硬币组合出该下标
    var dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};