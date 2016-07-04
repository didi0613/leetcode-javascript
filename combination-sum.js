/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    if (candidates.length === 0) {
        return target === 0;
    }

    var ret = [];
    for (var start = 0; start < candidates.length; start++) {
        combinationSumBuilder(candidates, target, [], 0, start, ret);
    }
    return ret;
};

function combinationSumBuilder(candidates, target, item, itemSum, index, ret) {
    item.push(candidates[index]);
    itemSum += parseInt(candidates[index]);

    if (itemSum > target) {
        return;
    }

    if (itemSum === target && !ret.includes(item)) {
        ret.push(item.slice());
    }

    for (var i = 0; i < candidates.length; i++) {
        combinationSumBuilder(candidates, target, item, itemSum, i, ret);
    }

    item.pop();
    itemSum -= parseInt(candidates[index]);
}