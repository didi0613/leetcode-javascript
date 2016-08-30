/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var ret = [];
    var start = 0, end = numbers.length - 1;
    while (start < end) {
        var sum = numbers[start] + numbers[end];
        if (sum === target) {
            ret.push(start + 1);
            ret.push(end + 1);
            return ret;
        } else if (sum > target) {
            end--;
        } else {
            start++;
        }
    }

    return ret;
};