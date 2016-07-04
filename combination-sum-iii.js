/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var ret = [];
    helper(numbers, ret, k, n, [], 0);
    return ret;
};

function helper(numbers, ret, k, target, item, index) {
    if (target < 0 || item.length > k) {
        return;
    }

    if (target === 0 && item.length === k) {
        ret.push(item.slice());
    }

    for (var i = index; i < numbers.length; i++) {
        item.push(numbers[i]);
        helper(numbers, ret, k, target - numbers[i], item, i + 1);
        item.pop();
    }
}