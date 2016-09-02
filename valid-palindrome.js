/**
 * @param {string} s
 * @return {boolean}
 */
// Solution 1
var isPalindrome = function (s) {
    s = s.replace(/\W/g, '').toLowerCase();

    var arr = s.split('');
    var len = arr.length;

    if (len < 2) {
        return true;
    }
    var start = 0, end = len - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

// Solution 2
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.trim();
    var len = s.length;
    if (len <= 1) {
        return true;
    }

    var start = 0, end = len - 1;
    while (start < end) {
        while (!s[start].match(/[a-zA-Z0-9]/g) && start < len && start < end) {
            start++;
        }

        while (!s[end].match(/[a-zA-Z0-9]/g) && end >= 0 && end > start) {
            end--;
        }

        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        } else {
            start++;
            end--;
        }
    }

    return true;
};

// Solution 3
// One line solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/\W/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
};

/*
 * Summarize
 * \W
 * 匹配一个非单字字符 <=> [^A-Za-z0-9_]
 */

/*
 Regular expression flags
 Flag	Description
 g	Global search.
 i	Case-insensitive search.
 m	Multi-line search.
 y	Perform a "sticky" search that matches starting at the current position in the target string. See sticky
 * */

// Time Complexity: O(n)
// Space Complexity: O(1)