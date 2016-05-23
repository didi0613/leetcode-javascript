/**
 * @param {number} n
 * @return {number}
 */

 function checkPrime(n) {
     for(var j=2;j<n;j++) {
         if(n%j === 0) {
             return false;
         }
     }
     return true;
 }

var countPrimes = function(n) {
    if(n<=2) {
        return 0;
    }

    var ret = 1;
    for(var i=3;i<n;i+=2) {
        if(checkPrime(i)) {
            ret++;
        }
    }
    return ret;
};