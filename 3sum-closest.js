/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    var len = nums.length;
    var ret = Number.MAX_VALUE;
    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < len - 2; i++) {
        var left = i + 1, right = len - 1;
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }

            ret = Math.abs(target - ret) < Math.abs(target - sum) ? ret : sum;
        }
    }

    return ret;
};