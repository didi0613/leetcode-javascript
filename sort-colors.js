/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var hashmap = {};
    for (var i in nums) {
        if (nums[i] in hashmap) {
            hashmap[nums[i]]++;
        } else {
            hashmap[nums[i]] = 1;
        }
    }

    var k = 0;
    for (var j in hashmap) {
        while (hashmap[j] > 0) {
            hashmap[j]--;
            nums[k++] = parseInt(j);
        }
        j++;
    }
};