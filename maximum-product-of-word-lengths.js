/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    var max = 0;
    var mask = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            mask[i] |= Math.pow(2, words[i][j].charCodeAt() - 'a'.charCodeAt());
        }
    }

    for (i = 0; i < words.length; i++) {
        for (j = 0; j < i; j++) {
            // & is bitwise AND
            // && is logical AND
            if ((mask[i] & mask[j]) === 0) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};