// 所有平方数的灯泡都将会是打开的状态
// 问题简化为 求1到n之间完全平方数的个数

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    return Math.floor(Math.sqrt(n));
};