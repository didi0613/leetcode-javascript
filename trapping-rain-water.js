/*
 * 对任意位置i，在i上的积水，由左右两边最高的bar：A[left] = max{A[j], j<i}, A[right] = max{A[j], j>i}决定。
 * 定义Hmin = min(A[left], A[right])，则积水量Si为:
 * Hmin <= A[i]时，Si = 0
 * Hmin > A[i]时，Si = Hmin - A[i]
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    var len = height.length;
    var left = new Array(len), right = new Array(len);
    left.fill(0);
    right.fill(0);
    var ret = 0;

    for (var i = 1; i < len; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }

    for (var j = len - 2; j >= 0; j--) {
        right[j] = Math.max(right[j + 1], height[j + 1]);
        var minHeight = Math.min(left[j], right[j]);
        if (minHeight > height[j]) {
            ret += (minHeight - height[j]);
        }
    }

    return ret;
};