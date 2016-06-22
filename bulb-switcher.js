// 所有平方数的灯泡都将会是打开的状态
// 问题简化为 求1到n之间完全平方数的个数

// Solution 1
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};
// Time Complexity: O(1)
// Space Complexity: O(1)

// Solution 2
// Without using API
// Time Complexity: O(n ^ 0.5)
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    var ret = 1;

    while (ret * ret <= n) {
        ret++;
    }

    return ret - 1;
};