/**
 * @param {number} n
 * @return {boolean}
 */
// Solution 1
var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false;
    }

    while (n % 2 === 0) {
        n = n / 2;
    }

    if (n > 1) {
        return false;
    } else {
        return true;
    }
};

// Solution 2
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false;
    }

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        } else {
            n = n / 2;
        }
    }

    return true;
};