/**
 * @param {number[]} nums
 * @return {boolean}
 * 如果只是判断能否跳到终点，
 * 我们只要在遍历数组的过程中，
 * 更新每个点能跳到最远的范围就行了，
 * 如果最后这个范围大于等于终点，
 * 就是可以跳到。
 */
var canJump = function (nums) {
    // index 0 ~ i的范围里可以跳到最远的index
    var max = 0;
    for (var i = 0; i <= max && i < nums.length; i++) {
        max = Math.max(max, nums[i] + i);
    }
    return i == nums.length;
};