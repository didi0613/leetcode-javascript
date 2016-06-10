/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) {
        return false;
    } else {
        while (n % 3 === 0) {
            n = n / 3;
        }

        if (n > 1) {
            return false
        } else {
            return true;
        }
    }
};

/*
 * negative value or zero is not power of three
 */

// Solution 2
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n <= 0) {
        return false;
    }

    while (n > 1) {
        if (n % 3 !== 0) {
            return false;
        } else {
            n = n / 3;
        }
    }
    return true;
};