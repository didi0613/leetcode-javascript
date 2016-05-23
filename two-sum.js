/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    if(len<=1) {
        return target === len;
    }

    var ret = [];
    // {needed_value, index}
    var map = [];
    for(var i=0;i<len;i++) {
        if(nums[i] in map) {
            ret.push(map[nums[i]],i);
            break;
        } else {
            map[target-nums[i]] = i;
        }
    }
    return ret;
};