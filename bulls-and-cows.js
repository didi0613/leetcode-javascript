/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var nums_a = 0, nums_b = 0;
    var hash_a = [], hash_b = [];

    for(var p = 0;p<secret.length;p++) {
        if(secret[p] in hash_a) {
                hash_a[secret[p]]++;
            } else {
                hash_a[secret[p]] = 1;
        }
    }

    // check the exactly equal situation
    for(var i=0;i<guess.length;i++) {
        if(guess[i] === secret[i]) {
            nums_a++;
            if(hash_a[secret[i]] > 0) {
                hash_a[secret[i]]--;
            }
        }
    }

    // check the rest of non-paired object
    for(var ii=0; ii<guess.length;ii++) {
        if(guess[ii] !== secret[ii]) {
            if(guess[ii] in hash_a && hash_a[guess[ii]] > 0) {
                nums_b++;
                hash_a[guess[ii]]--;
            }
        }
    }

    return nums_a + "A" + nums_b + "B";
};