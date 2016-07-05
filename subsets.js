/**
 * @param {number[]} nums
 * @return {number[][]}
 * 时间O(2^n) 空间O(2^n)
 * 子集数为2^n
 */
var subsets = function (nums) {
    var len = nums.length;

    if (len === 0) {
        return [];
    }

    var ret = [];
    subsetsBuilder(nums.sort(), [], ret, 0);
    return ret;
};

function subsetsBuilder(nums, item, ret, index) {
    ret.push(item.slice());

    for (var i = index; i < nums.length; i++) {
        if (!item.includes(nums[i])) {
            item.push(nums[i]);
            subsetsBuilder(nums, item, ret, i);
            item.pop();
        }
    }
}