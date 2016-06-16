/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// Solution 1
var getHint = function (secret, guess) {
    var nums_a = 0, nums_b = 0;
    var hash_a = [], hash_b = [];

    for (var p = 0; p < secret.length; p++) {
        if (secret[p] in hash_a) {
            hash_a[secret[p]]++;
        } else {
            hash_a[secret[p]] = 1;
        }
    }

    // check the exactly equal situation
    for (var i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            nums_a++;
            if (hash_a[secret[i]] > 0) {
                hash_a[secret[i]]--;
            }
        }
    }

    // check the rest of non-paired object
    for (var ii = 0; ii < guess.length; ii++) {
        if (guess[ii] !== secret[ii]) {
            if (guess[ii] in hash_a && hash_a[guess[ii]] > 0) {
                nums_b++;
                hash_a[guess[ii]]--;
            }
        }
    }

    return nums_a + "A" + nums_b + "B";
};

// Solution 2
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
    var map = [];
    for (var i in secret) {
        if (map[secret[i]]) {
            map[secret[i]]++;
        } else {
            map[secret[i]] = 1;
        }
    }

    var bull = 0, cows = 0;
    // check bull first
    for (var j in guess) {
        if (guess[j] === secret[j]) {
            bull++;
            map[guess[j]]--;

            // Mark the paired position
            var arr = guess.split('')
            arr[j] = 'x';
            guess = arr.join('');
        }
    }

    // check cows
    for (j in guess) {
        if (map[guess[j]] > 0) {
            cows++;
            map[guess[j]]--;
        }
    }

    return bull + "A" + cows + "B";
};