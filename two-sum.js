/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var hash = [];
    var len = nums.length;
    var ret = [];

    for (var i = 0; i < len; i++) {
        if (nums[i] in hash) {
            ret.push(hash[nums[i]]);
            ret.push(i);
            break;
        } else {
            hash[target - nums[i]] = i;
        }
    }

    return ret;
};