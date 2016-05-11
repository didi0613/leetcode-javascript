/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length;
    var ret = nums[0];
    var counter = 1, i = 0;

    nums.sort();

    while(i < len-1) {
        if(nums[i] === nums[i+1]) {
            counter++;
            if(counter > len/2) {
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