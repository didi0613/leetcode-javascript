/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var dictionary = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var s_array = s.split('');
    var len = s.length;
    var sum = 0;

    for (var i = 0; i < len; i++) {
        if (s[i] === 'C') {
            if (i === len - 1) {
                sum += dictionary['C'];
            } else if (s[i + 1] === 'M') {
                sum += dictionary['CM'];
                i++;
            } else if (s[i + 1] === 'D') {
                sum += dictionary['CD'];
                i++;
            } else {
                sum += dictionary['C'];
            }
        } else if (s[i] === 'X') {
            if (i === len - 1) {
                sum += dictionary['X'];
            } else if (s[i + 1] === 'C') {
                sum += dictionary['XC'];
                i++;
            } else if (s[i + 1] === 'L') {
                sum += dictionary['XL'];
                i++;
            } else {
                sum += dictionary['X'];
            }
        } else if (s[i] === 'I') {
            if (i === len - 1) {
                sum += dictionary['I'];
            } else if (s[i + 1] === 'X') {
                sum += dictionary['IX'];
                i++;
            } else if (s[i + 1] === 'V') {
                sum += dictionary['IV'];
                i++;
            } else {
                sum += dictionary['I'];
            }
        } else {
            sum += dictionary[s[i]];
        }
    }

    return sum;
};