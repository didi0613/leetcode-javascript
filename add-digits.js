/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // Solution 1
    if(num < 10) {
        return num;
    }

    return addDigits(num.toString().split('').reduce((a, b) => Number(a) + Number(b), 0));

    // Solution 2 runtime O(1)
    //return (num-1) % 9 + 1;
};

/*
 * Summarize
 * - Pay attention to the string and number transition.
 *
 * - reduce (callback, initial_value)
 *   The reduce() method applies a function against an accumulator
 *   and each value of the array (from left-to-right) to reduce it to a single value.
 *
 * - Trick
 *   Tried out all the numbers between 1 to 20, found the rules:
 *   Results are based on multiple of 9, the answer is n%9
 *   However, to include number itself is a multiple of 9 situation
 *   The answer is (n-1)%9 + 1;
 */