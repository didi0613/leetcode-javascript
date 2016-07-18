/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var count = new Array(nums.length);
    count[0] = 1;
    var max = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) count[i] = count[i - 1];
        else if (nums[i] == nums[i - 1] + 1) count[i] = count[i - 1] + 1;
        else count[i] = 1;
        max = Math.max(max, count[i]);
    }
    return max;
};