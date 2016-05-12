/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) {
        return false;
    }

    while(n%2 === 0) {
        n = n/2;
    }

    if(n>1) {
        return false;
    } else {
        return true;
    }
};