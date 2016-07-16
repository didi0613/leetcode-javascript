/**
 * @param {number[]} height
 * @return {number}
 * X轴上两指针的距离right - left为矩形长；
 * Y轴取两个指针所指的较短边：
 * Math.min(heights[left], heights[right])作为宽，相乘所得max为最大装水容量。
 * 将两指针向中间移动，更新max的最大值。
 */
var maxArea = function (height) {
    var start = 0, end = height.length - 1;
    var ret = 0;
    while (start < end) {
        var sum = (end - start) * Math.min(height[end], height[start]);
        ret = Math.max(ret, sum);

        if (height[end] < height[start]) {
            end--;
        } else {
            start++;
        }
    }

    return ret;
};