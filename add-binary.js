/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// Using Ret as an array
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

// Using ret as a string
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    var ret = "";

    var len1 = a.length;
    var len2 = b.length;

    if (len1 === 0 && len2 === 0) {
        return ret;
    } else if (len1 === 0) {
        return b;
    } else if (len2 === 0) {
        return a;
    } else {
        if (len1 < len2) {
            for (var i = 0; i < len2 - len1; i++) {
                a = '0' + a;
            }
        } else if (len1 > len2) {
            for (i = 0; i < len1 - len2; i++) {
                b = '0' + b;
            }
        }

        // guarantee that a and b are the same length
        var len = a.length;
        var carry = 0;

        for (i = len - 1; i >= 0; i--) {
            var sum = parseInt(a[i]) + parseInt(b[i]) + carry;
            if (sum >= 2) {
                carry = 1;
                sum = sum % 2;
            } else {
                carry = 0;
            }
            ret = sum + ret;
        }

        if (carry === 1) {
            ret = carry + ret;
        }

        return ret;
    }
};