/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if(s.length < 2) {
        return s;
    } else {
        return s.split('').reverse().join('');
    }
};