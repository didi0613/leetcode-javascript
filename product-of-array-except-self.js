/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        product = product * nums[i];
    }

    var ret = [];
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] === 0) {
            ret.push(0);
        } else {
            ret.push(product / nums[j]);
        }
    }
    return ret;
};