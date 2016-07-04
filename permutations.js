/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var ret = [];
    if (nums.length === 0) {
        return ret;
    }

    permuteBuilder(nums, ret, []);
    return ret;
};

function permuteBuilder(nums, ret, item) {
    if (item.length === nums.length) {
        ret.push(item.slice());
    }

    for (var i = 0; i < nums.length; i++) {
        if (!item.includes(nums[i])) {
            item.push(nums[i]);
            permuteBuilder(nums, ret, item);
            item.pop();
        }
    }
}