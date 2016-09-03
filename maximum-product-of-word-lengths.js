/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    var max = 0;
    var bitDict = [];
    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            bitDict[i] |= Math.pow(2, words[i][j].charCodeAt() - 'a'.charCodeAt());
        }
    }

    for (i = 0; i < words.length; i++) {
        for (j = 0; j < words.length; j++) {
            if (i !== j && !hasSharedLetter(i, j)) {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;

    function hasSharedLetter(index1, index2) {
        if ((bitDict[index1] & bitDict[index2]) === 0) return false;
        return true;
    }
};