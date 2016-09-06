/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    var min = Number.MAX_VALUE;
    var secondmin = Number.MAX_VALUE;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] <= min) {
            min = nums[i];
        } else if (nums[i] < secondmin) {
            secondmin = nums[i];
        } else if (nums[i] > secondmin) {
            return true;
        }
    }
    return false;
};