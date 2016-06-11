/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n === 1 || n === 7) {
        return true;
    }

    if (n < 10) {
        return false;
    }

    var marked = [];

    var arr = n.toString().split('');
    var ret = 0;

    for (var i = 0; i < arr.length; i++) {
        ret += parseInt(arr[i]) * parseInt(arr[i]);
    }

    if (ret === 1) {
        return true;
    } else {
        if (marked.includes(ret)) {
            return false;
        } else {
            marked.push(ret);
            return isHappy(ret);
        }
    }
};