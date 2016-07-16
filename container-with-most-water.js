/**
 * @param {number[]} height
 * @return {number}
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