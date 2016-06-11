/**
 * @param {number} n
 * @return {boolean}
 */
// Solution 1
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

// Solution 2
/**
 * @param {number} n
 * @return {boolean}
 */
function isHappyHelper(n, hash) {
    var arr = n.toString().split('');
    var ret = 0;
    for (var i in arr) {
        ret += parseInt(arr[i]) * parseInt(arr[i]);
    }

    if (ret === 1) {
        return true;
    } else {
        if (hash.includes(ret)) {
            return false;
        } else {
            hash.push(ret);
            return isHappyHelper(ret, hash);
        }
    }
}

var isHappy = function (n) {
    return isHappyHelper(n, []);
};