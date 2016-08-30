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

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
    var ret = [0];

    for (var i = 1; i <= num; i++) {
        // 从1开始，
        // 遇到偶数时, 其1的个数和该偶数除以2得到的数字的1的个数相同，
        // 遇到奇数时，其1的个数等于该奇数除以2得到的数字的1的个数再加
        if (i % 2 === 0) {
            ret.push(ret[parseInt(i / 2)]);
        } else {
            ret.push(ret[parseInt(i / 2)] + 1);
        }
    }

    return ret;
};