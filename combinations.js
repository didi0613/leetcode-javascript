/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    if (n === 0 || k === 0) {
        return [];
    }

    var ret = [];
    combineBuilder(n, k, ret, [], 0);
    return ret;
};

function combineBuilder(n, k, ret, item, index) {
    if (item.length === k) {
        ret.push(item.slice());
        return;
    }

    for (var i = index; i < n; i++) {
        item.push(i + 1);
        combineBuilder(n, k, ret, item, i + 1);
        item.pop();
    }
}