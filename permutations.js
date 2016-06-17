/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums === null || nums.length === 0) {
        return [];
    }

    var ret = [];
    permuteBuilder(nums, [], ret);
    return ret;
};

function permuteBuilder(nums, item, ret) {
    if (item.length === nums.length) {
        ret.push(item.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        if (!item.includes(nums[i])) {
            item.push(nums[i]);
            permuteBuilder(nums, item, ret);
            item.pop();
        }
    }
}