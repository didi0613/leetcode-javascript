/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n < 2) {
        return 0;
    }

    var remove = [];
    for(var i=2;i<n;i++) {
        // add multiple of i into removed
        var k=2;
        while(k*i < n) {
            if(!remove.includes(k*i)) {
                remove.push(k*i);
            }
            k++;
        }
    }
    console.log(remove);

    return n - remove.length;
};