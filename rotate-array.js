/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k%nums.length;
    // get the last k digits of nums
    var tmp = nums.splice(-k,k);
    for(var i=k-1;i>=0;i--) {
        nums.unshift(tmp[i]);
    }
};