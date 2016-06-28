/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * - find the 1st 正序index i
 * - 由后向前找到1st 大于 nums[i]的index j
 * - swap i j
 * - reverse everything starting from i+1
 */
var nextPermutation = function (nums) {
    var len = nums.length;
    if (len === 0) {
        return;
    }

    for (var i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            for (var j = len - 1; j > i; j--) {
                if (nums[i] < nums[j]) {
                    break;
                }
            }

            swap(nums, i, j);
            reverse(nums, i + 1, len - 1);
            return;
        }
    }

    reverse(nums, 0, len - 1);
};

function swap(nums, i, j) {
    var temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}

function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}