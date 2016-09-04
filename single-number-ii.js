/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });

    var count = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            if (count !== 3) {
                return nums[i - 1];
            } else {
                count = 1;
            }
        }
    }

    return nums[nums.length - 1];
};