/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var ret = "";
    var i = 0;

    while (num > 0) {
        if (num >= int[i]) {
            ret += roman[i];
            num -= int[i];
        } else {
            i++;
        }
    }

    return ret;
};