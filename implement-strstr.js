// Solution 1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

// Solution 2
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === "") {
        return needle === "" ? 0 : -1;
    }

    if (needle === "") {
        return 0;
    }

    //Guarantee haystack non-empty
    var len1 = haystack.length;
    var len2 = needle.length;

    if (len1 < len2) {
        return -1;
    } else if (len1 === len2) {
        return haystack === needle ? 0 : -1;
    } else {
        //guarantee haystack is longer than needle
        var startpoint = 0;
        while (startpoint <= len1 - len2) {
            var parent = startpoint, child = 0;
            while (haystack[parent] === needle[child]) {
                parent++;
                child++;

                if (child === len2) {
                    return startpoint;
                }
            }
            startpoint++;
        }

        return -1;
    }
};