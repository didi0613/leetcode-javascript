/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    while(num > 1){
        if(num % 4 === 0) {
            num = num/4;
        } else {
            return false;
        }
    }

    if(num === 0 || num < 0) {
        return false;
    }

    if(num === 1) {
        return true;
    }
};

/*
* Summarize
* A 4 byte int range:
* -2,147,483,648 to 2,147,483,647
*/