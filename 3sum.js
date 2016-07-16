/**
 * @param {number[]} nums
 * @return {number[][]}]
 */
var threeSum = function (nums) {
    nums.sort(function (a, b) {
        // ascending order
        return a - b;
    });
    var ret = [];
    var len = nums.length;

    // the last pair will be nums[len-3], nums[len-2], nums[len-1]
    for (var i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        threeSumBuilder(nums, i, 0 - nums[i], ret);
    }
    return ret;
};

function threeSumBuilder(nums, i, target, ret) {
    var left = i + 1, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] === target) {
            var item = [nums[i], nums[left], nums[right]];
            ret.push(item);

            left++;
            while (left < nums.length && nums[left] === nums[left - 1]) {
                left++;
            }
            right--;
            while (right >= 0 && nums[right] === nums[right + 1]) {
                right--;
            }
        } else if (nums[left] + nums[right] > target) {
            right--;
        } else {
            left++;
        }
    }
}