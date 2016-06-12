/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
var rob = function (nums) {
    var ret = 0;
    var len = nums.length;
    if (len === 0) {
        return ret;
    } else if (len === 1) {
        return nums[0];
    }

    var f = [];
    f[0] = nums[0];
    f[1] = Math.max(nums[0], nums[1]);
    ret = Math.max(f[0], f[1]);

    for (var i = 2; i < len; i++) {
        f[i] = Math.max(ret, f[i - 2] + nums[i]);
        ret = Math.max(ret, f[i]);
    }

    return f[len - 1];
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }

    var f = [];
    f[0] = nums[0];
    f[1] = Math.max(nums[0], nums[1]);
    for (var i = 2; i < len; i++) {
        f[i] = Math.max(f[i - 2] + nums[i], f[i - 1]);
    }

    return f[len - 1];
};