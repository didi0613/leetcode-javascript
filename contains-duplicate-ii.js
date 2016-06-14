/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Solution 1
var containsNearbyDuplicate = function (nums, k) {
    var len = nums.length;

    for (var i = 0; i < len - 1; i++) {
        for (var j = len - 1; j > i; j--) {
            if (nums[i] === nums[j] && (j - i) <= k) {
                return true;
            }
        }
    }

    return false;
};

// Solution 2
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var hash = [];
    var len = nums.length;
    if (len <= 1) {
        return false;
    }

    // Hash
    // value => index
    for (var i in nums) {
        if (hash[nums[i]]) {
            if (Math.abs(hash[nums[i]] - i) <= k) {
                return true;
            }
        }
        hash[nums[i]] = i;
    }

    return false;
};