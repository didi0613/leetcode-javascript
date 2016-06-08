/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var a_arr = a.split('');
    var b_arr = b.split('');
    var lena = a.length;
    var lenb = b.length;

    if (lena < lenb) {
        for (var k = 0; k < lenb - lena; k++) {
            a_arr.unshift(0);
        }
    }

    if (lenb < lena) {
        for (var kk = 0; kk < lena - lenb; kk++) {
            b_arr.unshift(0);
        }
    }

    //a is longer than b
    var carry = 0;
    var ret = [];
    for (var i = a_arr.length - 1; i >= 0; i--) {
        var sum = parseInt(a_arr[i]) + parseInt(b_arr[i]) + carry;
        if (sum >= 2) {
            carry = 1;
            sum = sum % 2;
            ret.unshift(sum);
        } else {
            carry = 0;
            ret.unshift(sum);
        }
    }

    if (carry > 0) {
        ret.unshift(carry);
    }

    return ret.join('');
};