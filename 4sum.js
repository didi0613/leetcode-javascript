/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    var ret = [];
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i <= nums.length - 4; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (var j = i + 1; j <= nums.length - 3; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            fourSumBuilder(nums, target - nums[i] - nums[j], i, j, ret);
        }
    }

    return ret;
};

function fourSumBuilder(nums, target, prev, start, ret) {
    var left = start + 1, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] === target) {
            var item = [nums[prev], nums[start], nums[left], nums[right]];
            ret.push(item);

            left++;
            while (left < nums.length && nums[left] === nums[left - 1]) {
                left++;
            }
            right--;
            while (right >= 0 && nums[right] === nums[right + 1]) {
                right--;
            }
        } else if (nums[left] + nums[right] < target) {
            left++;
        } else {
            right--;
        }
    }
}