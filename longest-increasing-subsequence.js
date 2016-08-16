/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    var f = new Array(nums.length).fill(1);
    var ret = 1;

    for (var i = 1; i < nums.length; i++) {
        for (var k = 0; k < i; k++) {
            if (nums[i] > nums[k]) {
                f[i] = Math.max(f[i], f[k] + 1);
            }
        }
        ret = Math.max(ret, f[i]);
    }

    return ret;
};