/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    if (!isNaN(parseInt(str))) {
        if (parseInt(str) > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        } else if (parseInt(str) < Math.pow(2, 31) * (-1)) {
            return Math.pow(2, 31) * (-1)
        } else {
            return parseInt(str);
        }
    } else {
        return 0;
    }
};

// Integer Range 32 bits
// -Math.pow(2,31) ~ Math.pow(2,31)-1