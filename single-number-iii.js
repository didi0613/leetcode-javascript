/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    var ret = [];
    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < nums.length; i++) {
        if (i === nums.length - 1 && nums[i] !== nums[i - 1]) {
            ret.push(nums[i]);
        } else if (i === 0 && nums[i] !== nums[i + 1]) {
            ret.push(nums[i]);
        } else {
            if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
                ret.push(nums[i]);
            }
        }
    }
    
    return ret;
};