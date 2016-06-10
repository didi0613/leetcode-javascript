/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Solution 1
var moveZeroes = function (nums) {
    var len = nums.length;
    var runner = 0, newIndex = 0;

    while (runner < len) {
        while (nums[runner] === 0) {
            runner++;
        }

        if (runner < len) {
            nums[newIndex] = nums[runner];
            runner++;
            newIndex++;
        }
    }

    for (var i = newIndex; i < len; i++) {
        nums[i] = 0;
    }
};

// Solution2
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var start = 0;
    var i = 0;
    var len = nums.length;

    while (start < len) {
        if (nums[start] !== 0) {
            nums[i] = nums[start];
            i++;
        }
        start++;
    }

    for (var j = i; j < len; j++) {
        nums[j] = 0;
    }
};

/*
 * Analyze:
 * Two pointers classic problem.
 * Runner pointer find all the non-zeroes numbers,
 * Replace the new index position.
 *
 * Be careful with the index scope along with the pointer moving.
 */