/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    var index = 0, count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) count = 1;
        else count++;
        if (count <= 2) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};