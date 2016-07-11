/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    var len = s.length;
    var ret = 0, sign = 1, stack = [];
    if (len === 0) {
        return 0;
    }

    for (var i = 0; i < len; i++) {
        if (!isNaN(parseInt(s[i]))) {
            var sum = parseInt(s[i]);
            while (i + 1 < len && !isNaN(parseInt(s[i + 1]))) {
                sum = sum * 10 + parseInt(s[i + 1]);
                i++;
            }
            ret += sum * sign;
        } else if (s[i] === '+') {
            sign = 1;
        } else if (s[i] === '-') {
            sign = -1;
        } else if (s[i] === '(') {
            stack.push(ret);
            stack.push(sign);
            ret = 0;
            sign = 1;
        } else if (s[i] === ')') {
            ret = ret * stack.pop() + stack.pop();
        }
    }
    return ret;
};