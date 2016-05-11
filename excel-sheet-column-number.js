/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length, sum = 0;
    for(var i=len-1;i>=0;i--) {
        sum+= (s.charCodeAt(len-i-1) - 64) * Math.pow(26, i);
    }

    return sum;
};