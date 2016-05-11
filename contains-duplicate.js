/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    var start = 0, end = 1;
    var len = nums.length;

    if(len <= 1) {
        return false;
    } else {
        while(end < len) {
            if(nums[start] === nums[end]) {
                return true;
            }
            start++;
            end++;
        }
        return false;
    }
};