/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }

    //at least one number
    var max = [], min = [], ret = nums[0];
    max[0] = nums[0];
    min[0] = nums[0];

    for (var i = 1; i < len; i++) {
        if (nums[i] > 0) {
            max[i] = Math.max(max[i - 1] * nums[i], nums[i]);
            min[i] = Math.min(min[i - 1] * nums[i], nums[i]);
        } else {
            max[i] = Math.max(min[i - 1] * nums[i], nums[i]);
            min[i] = Math.min(max[i - 1] * nums[i], nums[i]);
        }

        ret = Math.max(max[i], ret);
    }

    return ret;
};

// Time Complexity: O(n)
// Space Complexity: O(n)