/*
 * Transform decimal to n-ary bigit number.toString(n);
 */
// Solution 1
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var ret = 0;

    var arr = n.toString(2).split('').sort();
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === '1') {
            ret++;
        } else {
            break;
        }
    }

    return ret;
};

//
// Bit Manipulation Resolution
// Solution 2
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var ret = 0, i = 0;
    while (i < 32) {
        ret += (n >>> i) & 1;
        i++;
    }
    return ret;
};

// Solution 3
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var ret = 0;
    while (n !== 0) {
        n &= (n - 1);
        ret++;
    }
    return ret;
};