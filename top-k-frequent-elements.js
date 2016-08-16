/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var len = nums.length;
    var ret = [];
    if (len === 0) {
        return 0;
    }

    // get numbers => frequency dictionary
    var hashmap = {};
    for (var i in nums) {
        if (hashmap[nums[i]]) {
            hashmap[nums[i]]++;
        } else {
            hashmap[nums[i]] = 1;
        }
    }

    // get all the frequency => number list dictionary
    var freqHashmap = {};
    var hashmapKeys = Object.keys(hashmap);
    for (var j in hashmapKeys) {
        var key = hashmapKeys[j];
        var freq = hashmap[key];
        if (!freqHashmap[freq]) {
            freqHashmap[freq] = [];
        }
        freqHashmap[freq].push(key);
    }

    // get the top k answer
    for (i = len, j = 0; k > 0; k--) {
        // 如果当前的i在freqHashmap[i]中已经遍历完了，则进入到下一个i
        for (; !freqHashmap[i] || freqHashmap[i].length === j; j = 0, i--);
        ret.push(parseInt(freqHashmap[i][j++]));
    }

    return ret;
};