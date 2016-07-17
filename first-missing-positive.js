/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    var hashmap = {};
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            hashmap[nums[i]] = true;
        }
    }

    // loop hashmap and find the first missing positive number
    var n = 1;
    while (true) {
        if (!hashmap[n]) {
            break;
        } else {
            n++;
        }
    }
    return n;
};