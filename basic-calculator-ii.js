/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    var len = s.length;
    if (len === 0) {
        return 0;
    }

    var stack = [];
    var num = 0;
    var ret = 0;
    var sign = '+';
    for (var i = 0; i < len; i++) {
        if (!isNaN(parseInt(s[i]))) {
            num = num * 10 + parseInt(s[i]);
        }

        if ((isNaN(parseInt(s[i])) && s[i] !== " ") || i === len - 1) {
            if (sign == '-') {
                stack.push(-num);
            }
            if (sign == '+') {
                stack.push(num);
            }
            if (sign == '*') {
                stack.push(stack.pop() * num);
            }
            if (sign == '/') {
                stack.push(parseInt(stack.pop() / num));
            }
            sign = s[i];
            num = 0;
        }
    }

    for (var j in stack) {
        ret += stack[j];
    }
    return ret;
};