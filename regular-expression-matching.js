/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }

    if (p.length === 1 || p[1] !== '*') {
        if (s.length > 0 && (p[0] === s[0] || p[0] === '.')) {
            return isMatch(s.substring(1), p.substring(1));
        } else {
            return false;
        }
    } else {
        var i = 0;
        while (i < s.length && (s[i] === p[0] || p[0] === '.')) {
            i++;
        }

        return isMatch(s.substring(i), p.substring(1));
    }
};