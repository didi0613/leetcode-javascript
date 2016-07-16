/**
 * @param {number[]} nums
 * @return {number[][]}]
 */
var threeSum = function (nums) {
    nums.sort();
    var ret = [];
    var len = nums.length;

    // the last pair will be nums[len-3], nums[len-2], nums[len-1]
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }

        threeSumBuilder(nums, i + 1, 0 - nums[i], ret);
    }
    return ret;
};

function threeSumBuilder(nums, start, target, ret) {
    var hashmap = {};

    for (var i = start; i < nums.length; i++) {
        if (nums[i] in hashmap) {
            var item = [nums[start], nums[hashmap[nums[i]]], nums[i]];
            ret.push(item);
        } else {
            hashmap[target - nums[i]] = i;
        }
    }
}