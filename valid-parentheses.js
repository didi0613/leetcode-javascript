/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度O(n)
 * 空间复杂度 O(n)
 */
var isValid = function (s) {
    var stack = [];
    var len = s.length;

    if (len % 2 === 1) {
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

// Solution 2
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var len = s.length;
    if (len === 0) {
        return true;
    }

    var hash = {'(': ')', '[': ']', '{': '}'};
    var stack = [];
    for (var i = 0; i < len; i++) {
        if (s[i] in hash) {
            stack.push(s[i]);
        } else {
            var tmp = stack.pop();
            if (hash[tmp] !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};