/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }

    var ret = nums[0], max = [];
    max[0] = nums[0];

    for (var i = 1; i < len; i++) {
        max[i] = Math.max(max[i - 1] + nums[i], nums[i]);
        ret = Math.max(ret, max[i]);
    }

    return ret;
};