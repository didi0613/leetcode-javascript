/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];

    var len = s.length;
    if (len === 0) {
        return true;
    }
    if (len === 1) {
        return false;
    }

    for (var i = 0; i < len; i++) {
        switch (s[i]) {
            case '(':
                stack.push('(');
                break;
            case '{':
                stack.push('{');
                break;
            case '[':
                stack.push('[');
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false;
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false;
                }
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false;
                }
                break;
        }
    }

    return stack.length === 0;
};