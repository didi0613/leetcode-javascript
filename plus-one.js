/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var len = digits.length;
    var ret = [];

    var carry = 1;
    for (var i = len - 1; i >= 0; i--) {
        var sum = digits[i] + carry;
        carry = parseInt(sum / 10);
        ret.unshift(sum % 10);
    }

    if (carry > 0) {
        ret.unshift(carry);
    }

    return ret;
};