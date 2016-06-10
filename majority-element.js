/**
 * @param {number[]} nums
 * @return {number}
 */
// Solution 1
var majorityElement = function (nums) {
    var len = nums.length;
    var ret = nums[0];
    var counter = 1, i = 0;

    nums.sort();

    while (i < len - 1) {
        if (nums[i] === nums[i + 1]) {
            counter++;
            if (counter > len / 2) {
                ret = nums[i];
                break;
            }
        } else {
            counter = 1;
        }
        i++;
    }
    return ret;
};

// Solution 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort();
    return nums[parseInt(nums.length / 2)];
};

/*
 * Summmarize
 * Sort the array,
 * The middle value is the value we are seeking for
 *
 */