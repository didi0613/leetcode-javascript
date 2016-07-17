/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var ret = [];
    var hashmap = {};

    for (var i = 0; i < strs.length; i++) {
        var arr = strs[i].split('');
        if (arr.sort() in hashmap) {
            hashmap[arr.sort()].push(strs[i]);
        } else {
            hashmap[arr.sort()] = [strs[i]];
        }
    }

    for (var j in hashmap) {
        ret.push(hashmap[j]);
    }
    return ret;
};