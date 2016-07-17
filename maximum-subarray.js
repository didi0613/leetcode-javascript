/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var len = nums.length;
    var max = [];
    var ret = nums[0];
    max[0] = nums[0];

    for (var i = 1; i < len; i++) {
        max[i] = Math.max(max[i - 1] + nums[i], nums[i]);
        ret = Math.max(max[i], ret);
    }

    return ret;
};

// Time Complexity: O(n)
// Space Complexity: O(n)