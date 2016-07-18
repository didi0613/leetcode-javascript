/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort();
    var count = new Array(num.length);
    count[0] = 1;
    var max = 1;
    for (var i = 1; i < num.length; i++) {
        if (num[i] == num[i - 1]) count[i] = count[i - 1];
        else if (num[i] == num[i - 1] + 1) count[i] = count[i - 1] + 1;
        else count[i] = 1;
        max = Math.max(max, count[i]);
    }
    return max;
};