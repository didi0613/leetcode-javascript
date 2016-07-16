/**
 * @param {number} n
 * @return {string[]}
 * 假设：左括符个数用left表示，右括符个数用right表示
 * 递归终止条件： left = right = n
 * 先要生成左括符，可以生成左括符的条件：left < n
 * 生成右括符条件： right < left
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