/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var ret = 0;
    while(n > 0) {
        if( (n & 1) === 1) {
            ret++;
        }
        n >>>=1;
    }

    return ret;
};

/*
* number shift right using >>>=1
*/