/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) {
        return num;
    }

    return addDigits(num.toString().split('').reduce((a, b) => Number(a) + Number(b), 0));
};

/*
 * Summarize
 * - Pay attention to the string and number transition.
 *
 * - reduce (callback, initial_value)
 *   The reduce() method applies a function against an accumulator
 *   and each value of the array (from left-to-right) to reduce it to a single value.
 */