/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    // dp[i]: solution numbers while target is i
    var dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (var i = 1; i <= target; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
    }

    return dp[target];
};