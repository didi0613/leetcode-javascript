/**
 * @param {string} s
 * @return {string[]}
 */
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