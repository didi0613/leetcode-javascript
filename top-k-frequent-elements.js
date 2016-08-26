/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    var hashmap = {};

    // key => frequency
    for (var i = 0; i < nums.length; i++) {
        if (hashmap[nums[i]]) {
            hashmap[nums[i]]++;
        } else {
            hashmap[nums[i]] = 1;
        }
    }

    // frequency => key
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

    // get the top k
    var ret = [];
    var keys = Object.keys(freqHashmap);
    for (var j = keys.length - 1; j >= 0; j--) {
        for (var p = 0; p < freqHashmap[keys[j]].length && k > 0; p++) {
            ret.push(parseInt(freqHashmap[keys[j]][p]));
            k--;
        }
    }

    return ret;
};