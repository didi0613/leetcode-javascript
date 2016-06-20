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

// Solution 2
// Without using API
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