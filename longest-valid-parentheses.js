/**
 * @param {string} s
 * @return {number}
 * https://segmentfault.com/a/1190000002630583
 */
var longestValidParentheses = function (s) {
    var stack = [];
    var ret = 0;
    var left = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else if (s[i] === ")") {
            if (stack.length !== 0) {
                stack.pop();
                if (stack.length === 0) {
                    ret = Math.max(ret, i - left + 1);
                } else {
                    ret = Math.max(ret, i - stack[stack.length - 1]);
                }
            } else {
                left = i + 1;
            }
        }
    }

    return ret;
};