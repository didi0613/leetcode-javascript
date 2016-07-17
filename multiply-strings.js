/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;

    // Max length of results
    var len3 = len1 + len2;
    // number at i * number at j saves in ret[i+j+1];
    var ret = new Array(len3);
    ret.fill(0);

    for (var i = len1 - 1; i >= 0; i--) {
        var carry = 0;
        for (var j = len2 - 1; j >= 0; j--) {
            var product = carry + parseInt(num1[i]) * parseInt(num2[j]) + ret[i + j + 1];
            ret[i + j + 1] = product % 10;
            carry = parseInt(product / 10);
        }
        ret[i + j + 1] += carry;
    }

    // remove useless forehead 0
    var k = 0;
    while (k < len3 - 1 && ret[k] === 0) {
        k++;
    }

    var result = "";
    while (k < len3) {
        result += ret[k];
        k++;
    }
    return result;
};