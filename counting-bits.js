/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    var ret = [0];

    for (var i = 1; i <= num; i++) {
        ret.push(countOnes(i.toString(2)));
    }

    return ret;
};

function countOnes(num) {
    var arr = num.toString();
    var ret = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '1') {
            ret++;
        }
    }
    return ret;
}