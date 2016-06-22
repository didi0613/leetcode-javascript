/**
 * @param {string} s
 * @return {string[]}
 */
// Improve using bit manipulation
// This method will cause a time limit exceeded issue.
var findRepeatedDnaSequences = function (s) {
    var len = s.length;
    if (len < 10) {
        return [];
    }

    var hash = [], ret = [], sequenceHash = [];
    hash['A'] = 0;
    hash['C'] = 1;
    hash['G'] = 2;
    hash['T'] = 3;

    for (var i = 0; i <= len - 10; i++) {
        var item = 0;

        for (var j = 0; j <= 9; j++) {
            item <<= 2;
            item += hash[s[i + j]];
        }

        if (!sequenceHash.includes(item)) {
            sequenceHash[item] = 1;
        } else if (sequenceHash[item] == 1) {
            sequenceHash[item] = 2;
            ret.push(s.substr(i, 10));
        }
    }

    return ret;
};

// Passed Solution
/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    var ret = [], sequenceMap = {};
    for (var i = 10; i <= s.length; i++) {
        var item = s.substring(i - 10, i);
        if (sequenceMap[item] === 1) {
            ret.push(item);
            sequenceMap[item] = 2;
        } else if (!sequenceMap[item]) {
            sequenceMap[item] = 1;
        }
    }

    return ret;
};

//时间 O(N) 空间 O(N)