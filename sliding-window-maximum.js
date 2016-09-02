/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    // leftmax[i]: 0 ~ i max value
    // rightmax[i]: i ~ nums.length-1 max value
    var len = nums.length;
    if (len === 0) {
        return [];
    }

    var leftmax = new Array(len);
    var rightmax = new Array(len);

    leftmax[0] = nums[0];
    rightmax[len - 1] = nums[len - 1];

    for (var i = 1; i < len; i++) {
        leftmax[i] = (i % k === 0) ? nums[i] : Math.max(leftmax[i - 1], nums[i]);
        rightmax[len - 1 - i] = ((len - 1 - i) % k === 0) ? nums[len - 1 - i] : Math.max(rightmax[len - i], nums[len - 1 - i]);
    }

    var ret = [];
    for (i = 0; i < len - k + 1; i++) {
        ret[i] = Math.max(leftmax[i + k - 1], rightmax[i]);
    }
    return ret;
};