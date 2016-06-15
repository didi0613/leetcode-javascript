/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 2) {
        return 0;
    }

    var remove = [];
    for (var i = 2; i < n; i++) {
        // add multiple of i into removed
        var k = 2;
        while (k * i < n) {
            if (!remove[k * i]) {
                remove[k * i] = true;
            }
            k++;
        }
    }
    
    var ans = 0;
    for (var p = 2; p < n; p++) {
        if (!remove[p]) {
            ans++;
        }
    }

    return ans;
};


/*
 * Push needs time to execute
 * Assign boolean number will faster the program
 */