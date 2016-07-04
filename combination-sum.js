/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var ret = [];
    helper(candidates, target, 0, ret, []);
    return ret;
};

function helper(candidates, target, index, ret, item) {
    if (target < 0) {
        return;
    }

    if (target === 0) {
        ret.push(item.slice());
    }

    for (var i = index; i < candidates.length; i++) {
        item.push(candidates[i]);
        helper(candidates, target - candidates[i], i, ret, item);
        item.pop();
    }
}