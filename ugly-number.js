/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    while (num > 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else if (num % 5 === 0) {
            num = num / 5;
        } else if (num % 3 === 0) {
            num = num / 3;
        } else {
            return false;
        }
    }

    if (num === 1) {
        return true;
    } else {
        return false;
    }
};