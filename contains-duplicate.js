/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Solution 1
var containsDuplicate = function (nums) {
    nums.sort();
    var start = 0, end = 1;
    var len = nums.length;

    if (len <= 1) {
        return false;
    } else {
        while (end < len) {
            if (nums[start] === nums[end]) {
                return true;
            }
            start++;
            end++;
        }
        return false;
    }
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort();
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};