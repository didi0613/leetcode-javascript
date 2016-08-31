/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    // ret = [a2*a3*a4, a1*a3*a4, a1*a2*a4, a1*a2*a3];
    // divided into
    // [1, a1, a1*a2, a1*a2*a3]
    // [a2*a3*a4, a3*a4, a4, 1]

    var ret1 = [1];
    for (var i = 1; i < nums.length; i++) {
        ret1[i] = ret1[i - 1] * nums[i - 1];
    }

    var ret2 = [];
    ret2[nums.length - 1] = 1;
    for (var j = nums.length - 2; j >= 0; j--) {
        ret2[j] = ret2[j + 1] * nums[j + 1];
    }

    var ret = [];
    for (var k = 0; k < nums.length; k++) {
        ret[k] = ret1[k] * ret2[k];
    }
    return ret;
};