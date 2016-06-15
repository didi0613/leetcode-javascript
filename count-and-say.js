/**
 * @param {number} n
 * @return {string}
 */

function read(str) {
    var len = str.length;
    if (len === 1) {
        return "1" + str[0];
    }

    var count = 1;
    var target = str[0];
    var ret = "";

    for (var k = 1; k < len; k++) {
        while (str[k] === target) {
            count++;
            k++;
        }
        ret += count + str[k - 1];
        if (k >= len) {
            return ret;
        } else {
            count = 1;
            target = str[k];
        }
    }

    ret += count + str[len - 1];

    return ret;
}

var countAndSay = function (n) {
    if (n <= 0) {
        return "";
    }

    var f = [];
    f[0] = "1";
    for (var i = 1; i < n; i++) {
        f[i] = read(f[i - 1]);
    }

    return f[n - 1];
};