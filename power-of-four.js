/**
 * @param {number} num
 * @return {boolean}
 */
// Solution 1
var isPowerOfFour = function (num) {
    while (num > 1) {
        if (num % 4 === 0) {
            num = num / 4;
        } else {
            return false;
        }
    }

    if (num === 0 || num < 0) {
        return false;
    }

    if (num === 1) {
        return true;
    }
};

/*
 * Summarize
 * A 4 byte int range:
 * -2,147,483,648 to 2,147,483,647
 */

// Solution 2
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num <= 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }

    var log100 = Math.log(parseInt(num.toString(2))) / Math.log(100);
    return Math.abs(Math.round(log100) - log100) < 1e-10 ? true : false;
};