/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var hashmap = [];
    for (var i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]]) {
            hashmap[nums[i]]++;
        } else {
            hashmap[nums[i]] = 1;
        }
    }

    var index = 0;
    for (var j in hashmap) {
        while (hashmap[j] > 0) {
            nums[index] = parseInt(j);
            index++;
            hashmap[j]--;
        }
    }
};