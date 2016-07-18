/**
 * @param {string} path
 * @return {string}
 * 先将整个路径按照/分开来，
 * 然后用一个栈，
 * 遇到..时弹出一个，
 * 遇到.和空字符串则不变，
 * 遇到正常路径则压入栈中。
 */
var simplifyPath = function (path) {
    var path_arr = path.split('/');
    var stack = [];

    for (var i = 0; i < path_arr.length; i++) {
        if (path_arr[i] === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (path_arr[i] === "." || path_arr[i].length === 0) {
            continue;
        } else {
            stack.push(path_arr[i]);
        }
    }

    return "/" + stack.join('/');
};