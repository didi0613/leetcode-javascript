/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1
var isAnagram = function (s, t) {
    return s.split("").sort().join("") == t.split("").sort().join("");
};

// Solution 2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var len1 = s.length;
    var len2 = t.length;
    if (len1 != len2) {
        return false;
    }

    var hash = [];
    for (var i = 0; i < len1; i++) {
        if (Object.keys(hash).includes(s[i])) {
            hash[s[i]]++;
        } else {
            hash[s[i]] = 1;
        }
    }

    for (var j = 0; j < len2; j++) {
        if (hash[t[j]] > 0) {
            hash[t[j]]--;
        } else {
            return false;
        }
    }
    return true;
};

/*
 * Summarize:
 * sort only works with array
 */