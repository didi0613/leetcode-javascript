/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    var ret = [];
    helper(s, ret, [], 0);
    return ret;
};

function helper(s, ret, item, index) {
    if (index === s.length) {
        ret.push(item.slice());
    }

    for (var i = index; i < s.length; i++) {
        if (isValid(s.substring(index, i + 1))) {
            item.push(s.substring(index, i + 1));
            helper(s, ret, item, i + 1);
            item.pop();
        }
    }
}

function isValid(s) {
    var start = 0, end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}