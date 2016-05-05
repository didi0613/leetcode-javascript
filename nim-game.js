/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    return n % 4 !== 0;
};

/**
 * Analyse
 * n = [1,3], first always win
 * n = 4, second always win, cause whatever first picks, always transform to n = [1,3] case.
 * n = [5,7], first always win, cause first can force the second always met n = 4 case.
 * n = 8, second always win, cause whatever first picks, always transform to n = [5,7] case.
 * ...
 * As far as n is not multiple of 4, first wins.
 */