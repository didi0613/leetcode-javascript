/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    if (n === 0) {
        return ret;
    }

    var nums = [];
    for (var i = 1; i <= n; i++) {
        nums.push(i);
    }

    while (k > 1) {
        nextPermutation(nums);
        k--;
    }

    return nums.join('');
};

var nextPermutation = function (nums) {
    var len = nums.length;
    if (len === 0) {
        return;
    }

    for (var i = len - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            for (var j = len - 1; j > i; j--) {
                if (nums[i] < nums[j]) {
                    break;
                }
            }

            swap(nums, i, j);
            reverse(nums, i + 1, len - 1);
            return;
        }
    }

    reverse(nums, 0, len - 1);
};

function swap(nums, i, j) {
    var temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}

function reverse(nums, start, end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}