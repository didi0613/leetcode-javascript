/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // Divider 5,5*5,5*5*5...
    var divider = 5;
    var ret = 0;
    while(divider <= n) {
        ret += Math.floor(n/divider);
        divider = divider*5;
    }

    return ret;
};

/*
* Summarize:
* n!后缀0的个数 = n!质因子中5的个数
              = floor(n/5) + floor(n/25) + floor(n/125) + ....
*/