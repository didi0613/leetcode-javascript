/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// solution 1
var wordPattern = function (pattern, str) {
    var str_array = str.split(' ');
    var pattern_array = pattern.split('');
    var map = [];
    var map2 = [];

    if (str_array.length !== pattern_array.length) {
        return false;
    }

    for (var i = 0; i < pattern_array.length; i++) {
        if (pattern_array[i] in map) {
            if (str_array[i] !== map[pattern_array[i]]) {
                return false;
            }
        } else {
            map[pattern_array[i]] = str_array[i];
        }
    }

    for (var ii = 0; ii < str_array.length; ii++) {
        if (str_array[ii] in map2) {
            if (pattern_array[ii] !== map2[str_array[ii]]) {
                return false;
            }
        } else {
            map2[str_array[ii]] = pattern_array[ii];
        }
    }

    return true;
};

// solution 2
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    var arr = str.split(' ');
    var a = 0, b = 0;
    var map = [];

    if (pattern.length !== arr.length) {
        return false;
    }

    while (a < pattern.length && b < arr.length) {
        if (map[pattern[a]]) {
            if (map[pattern[a]] !== arr[b]) {
                return false;
            } else {
                a++;
                b++;
            }
        } else {
            map[pattern[a]] = arr[b];
            a++;
            b++;
        }
    }

    var dict = [];
    a = 0, b = 0;
    while (a < pattern.length && b < arr.length) {
        if (dict[arr[b]]) {
            if (dict[arr[b]] !== pattern[a]) {
                return false;
            } else {
                a++;
                b++;
            }
        } else {
            dict[arr[b]] = pattern[a];
            a++;
            b++;
        }
    }

    return true;
};