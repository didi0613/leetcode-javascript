/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var ret = [];
    if (n === 0) {
        return ret;
    }

    generateParenthesisBuilder(n, ret, "", 0, 0);
    return ret;
};

function generateParenthesisBuilder(n, ret, item, left, right) {
    if (left === n && right === n) {
        ret.push(item);
    }

    if (left < n) {
        generateParenthesisBuilder(n, ret, item + "(", left + 1, right);
    }

    if (right < left) {
        generateParenthesisBuilder(n, ret, item + ")", left, right + 1);
    }
}