/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // leftmax[i]: 0 ~ i max value
    // rightmax[i]: i ~ nums.length-1 max value
    if (nums.length === 0) {
        return [];
    }

    var leftmax = new Array(nums.length);
    var rightmax = new Array(nums.length);

    leftmax[0] = nums[0];
    rightmax[nums.length - 1] = nums[nums.length - 1];

    for (var i = 1; i < nums.length; i++) {
        leftmax[i] = (i % k === 0) ? nums[i] : Math.max(leftmax[i - 1], nums[i]);
        rightmax[nums.length - 1 - i] = ((nums.length - 1 - i) % k === 0) ? nums[nums.length - 1 - i] : Math.max(rightmax[nums.length - i], nums[nums.length - 1 - i]);
    }

    var ret = [];
    for (var i = 0; i < nums.length - k + 1; i++) {
        ret[i] = Math.max(leftmax[i + k - 1], rightmax[i]);
    }
    return ret;
};