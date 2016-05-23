/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var ret = ""

    while(n>0) {
        var cur = (n-1)%26;
        ret = String.fromCharCode(65+cur) + ret;
        n = Math.floor((n-1)/26);
    }

    return ret;
};