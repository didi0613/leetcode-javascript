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

/**
 * Summarize:
 * - split(''): Transform String into Array, split by parameters
 * - join(''): Concatenate each item in array into String, join by parameters
 */