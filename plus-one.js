/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length, carry = 1;
    var ret = [];

    if(len === 0) {
        return ret;
    }

    for(var i=len-1;i>=0;i--) {
        var sum = digits[i] + carry;
        ret.unshift(sum%10);
        carry = parseInt(sum/10);
    }

    if(carry === 1) {
        ret.unshift(carry);
    }

    return ret;
};