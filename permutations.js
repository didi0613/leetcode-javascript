/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var len = nums.length;
    if (len === 0) {
        return [];
    }

    var ret = [];
    permuteBuilder(nums, [], [], ret);
    return ret;
};

function permuteBuilder(nums, hash, level, ret) {
    if (level.length === nums.length) {
        ret.push(level.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        if (!hash[i]) {
            level.push(nums[i]);
            hash[i] = true;
            permuteBuilder(nums, hash, level, ret);
            level.pop();
            hash[i] = false;
        }
    }
}