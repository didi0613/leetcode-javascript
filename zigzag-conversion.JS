/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    var ret = "";
    var diff = numRows * 2 - 2;

    //loop by each row index
    for (var i = 0; i < numRows; i++) {
        // each row starting character with the same index of the numRows
        for (var j = i; j < s.length; j += diff) {
            ret += s[j];

            // except for the first and last row
            if (i !== 0 && i !== numRows - 1) {
                var index = j + diff - 2 * i;
                if (index < s.length) {
                    ret += s[index];
                }
            }
        }
    }

    return ret;
};