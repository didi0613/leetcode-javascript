/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var ret = [];
    helper(n, k, ret, [], 1);
    return ret;
};

function helper(n, k, ret, item, index) {
    if (item.length > k) {
        return;
    }

    if (k === item.length) {
        ret.push(item.slice());
    }

    for (var i = index; i <= n; i++) {
        if (!item.includes(i)) {
            item.push(i);
            helper(n, k, ret, item, i + 1);
            item.pop();
        }
    }
}