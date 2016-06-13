/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return [];
    }

    if (numRows === 1) {
        return [[1]];
    }

    var last = [1];
    var ret = [];

    while (numRows > 0) {
        var current = [];
        current.push(1);
        for (var i = 0; i < last.length - 1; i++) {
            current.push(last[i] + last[i + 1]);
        }
        current.push(1);

        ret.push(last);
        last = current;
        numRows--
    }

    return ret;
};