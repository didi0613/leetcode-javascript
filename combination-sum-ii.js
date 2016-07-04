/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    var ret = [];
    candidates.sort();

    helper(candidates, target, ret, [], 0);
    return ret;
};

function helper(candidates, target, ret, item, index) {
    if (target < 0) {
        return;
    }

    if (target === 0) {
        ret.push(item.slice());
    }

    for (var i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] === candidates[i - 1]) {
            continue;
        }
        item.push(candidates[i]);
        helper(candidates, target - candidates[i], ret, item, i + 1);
        item.pop();
    }
}