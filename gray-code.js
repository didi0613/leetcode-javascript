/**
 * @param {number} n
 * @return {number[]}
 * 工业中的第i个格雷码是这么生成的：(i>>1)^i
 * i是指下标，从0开始，对于n的格雷码序列，一共有2^n个数
 */
var grayCode = function (n) {
    var ret = [];
    for (var i = 0; i < 1 << n; i++) {
        ret.push((i >> 1) ^ i);
    }
    return ret;
};