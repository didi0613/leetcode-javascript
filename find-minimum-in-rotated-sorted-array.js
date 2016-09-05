/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    var start = 0, end = nums.length - 1;
    while (start < end) {
        // 0 1 2 3 4 5 6 7
        var mid = parseInt((start + end) / 2);

        if (nums[mid] < nums[end]) {
            // => 6 7 0 *1* 2 3 4 5
            end = mid;
        } else {
            // => 2 3 4 *5* 6 7 0 1
            start = mid + 1;
        }
    }

    return nums[start];
};