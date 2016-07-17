/**
 * @param {number[]} nums
 * @return {number}
 * 如果要计算最短的步数，就不能贪心每次都找最远距离了，
 * 因为有可能一开始跳的远的路径，后面反而更慢。
 * 所以我们要探索所有的可能性，
 * 这里用快慢指针分出一块当前结点能跳的一块区域，
 * 然后再对这块区域遍历，
 * 找出这块区域能跳到的下一块区域的上下边界，
 * 每块区域都对应一步，
 * 直到上界超过终点时为之。
 */
var jump = function (nums) {
    var low = 0, high = 0, len = nums.length;
    var step = 0;
    while (high < len - 1) {
        step++;
        var curHigh = high;
        for (var i = low; i <= curHigh; i++) {
            high = Math.max(high, nums[i] + i);
        }
        low = curHigh + 1;
    }
    return step;
};