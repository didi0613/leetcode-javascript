/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length;

    for(var i=0;i<len-1;i++) {
        for(var j=len-1;j>i;j--) {
            if(nums[i] === nums[j] && (j-i)<=k) {
                return true;
            }
        }
    }

    return false;
};