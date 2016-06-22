/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    var len1 = s.length, len2 = t.length;

    if (len1 !== len2) {
        return false;
    }

    var mapA = [];
    for (var i = 0; i < len1; i++) {
        if (s[i] in mapA) {
            if (mapA[s[i]] !== t[i]) {
                return false;
            }
        } else {
            mapA[s[i]] = t[i];
        }
    }

    var mapB = [];
    for (var j = 0; j < len1; j++) {
        if (t[j] in mapB) {
            if (mapB[t[j]] !== s[j]) {
                return false;
            }
        } else {
            mapB[t[j]] = s[j];
        }
    }

    return true;
};

// Concise solution
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    var len1 = s.length, len2 = t.length;

    // check the length
    if (len1 !== len2) {
        return false;
    }

    // mapping from s to t
    if (!isomorphic([], len1, s, t) || !isomorphic([], len2, t, s)) {
        return false;
    }

    return true;
};

function isomorphic(hash, len, s, t) {
    var i = 0;
    while (i < len) {
        if (hash[s[i]]) {
            if (hash[s[i]] !== t[i]) {
                return false;
            }
        } else {
            hash[s[i]] = t[i];
        }
        i++;
    }

    return true;
}
// 时间 O(N) 空间 O(N)