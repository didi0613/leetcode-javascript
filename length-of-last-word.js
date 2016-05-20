/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str_array = s.trim().split(/(\s+)/);
    var len = str_array.length;

    if(len === 0 ){
        return 0;
    }

    return str_array[len-1].length;
};