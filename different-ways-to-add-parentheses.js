/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function (input) {
    return compute(input);
};

function compute(str) {
    var res = [];
    var regex = /\+|\-|\*/;

    if (!regex.test(str)) {
        return [parseInt(str)];
    }
    
    for (var i = 0; i < str.length; i++) {
        if (regex.test(str[i])) {
            var left = compute(str.substring(0, i));
            var right = compute(str.substring(i + 1));

            for (var j = 0; j < left.length; j++) {
                for (var k = 0; k < right.length; k++) {
                    if (str[i] === '+') {
                        res.push(parseInt(left[j] + right[k]));
                    } else if (str[i] === '-') {
                        res.push(parseInt(left[j] - right[k]));
                    } else if (str[i] === '*') {
                        res.push(parseInt(left[j] * right[k]));
                    }
                }
            }
        }
    }
    return res;
}