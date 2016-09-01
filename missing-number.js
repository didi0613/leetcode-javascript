/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort(function (a, b) {
        return a - b;
    });

    var i = 0;
    while (true) {
        if (nums[i] !== i) {
            break;
        }
        i++;
    }
    return i;
};