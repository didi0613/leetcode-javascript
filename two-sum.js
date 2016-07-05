/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time Complexity: O(n)
 * Space Complexity: O(n)
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

// Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var len = nums.length;
    if (len === 0) {
        return [];
    }

    var ret = [];
    var hash = {};

    for (var i in nums) {
        hash[target - nums[i]] = i;
    }

    for (var j = 0; j < len; j++) {
        if (nums[j] in hash && parseInt(hash[nums[j]]) !== j) {
            ret.push(j);
            ret.push(parseInt(hash[nums[j]]));
            break;
        }
    }

    return ret;
};